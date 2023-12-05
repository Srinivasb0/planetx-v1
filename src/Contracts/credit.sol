// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CarbonCreditToken is ERC20, Ownable {
    // Define the total supply of carbon credits
    uint256 public constant TOTAL_SUPPLY =  1000000000000000000000000000; // 1 billion credits
    uint public supply = 1000000000000000000000000000;

    // Mapping to track the balance of carbon credits for each address
    mapping(address => uint256) private _balances;

    // Event to emit when carbon credits are issued
    event CreditsIssued(address indexed to, uint256 amount);

    // Event to emit when carbon credits are redeemed
    event CreditsRedeemed(address indexed from, uint256 amount);

    constructor() ERC20("CarbonCreditToken", "CCT") {
        // Mint total supply to the contract owner
        // _mint(owner(), TOTAL_SUPPLY);
    }

    // Function to issue carbon credits to a user
    function issueCredits(address to, uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than zero");
        require(amount <= TOTAL_SUPPLY, "Exceeds total supply");
        require(amount <= supply, "Exceeds available supply");
        _mint(to, amount);
        supply = supply - amount;
        emit CreditsIssued(to, amount);
    }

    // Function to redeem carbon credits
    function redeemCredits(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        _burn(msg.sender, amount);
        emit CreditsRedeemed(msg.sender, amount);
    }
}