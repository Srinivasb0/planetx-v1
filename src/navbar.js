import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import {ethers} from 'ethers';
import Logo from './Asset.svg';

function MyNavbar() {
  const [selected, setSelected] = useState(0)
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
      setIsConnected(true);
      console.log(accountAddress);
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      provider.send("eth_requestAccounts", []);
    } catch (error) {
      setIsConnected(false);
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#"><img src={Logo} alt="React Logo" height={30} />
        {/* <Navbar.Text className="d-block small-text ml-2" style={{ fontSize: "0.8rem" }}>
            Tokenizing carbon credits for web3 projects
        </Navbar.Text> */}
       </Navbar.Brand>
        <div className="ms-auto d-flex">
          <a href="https://bafybeidrqzaeisk6be6cvcr722qpo3tjubtlpfa22mijafjq2b6oo3pcxy.ipfs.w3s.link/register.json" style={{ marginTop: "5px",marginRight: "20px", color:'#232323' }}>Project Register</a>
          <div style={{  marginTop: "5px",marginRight: "20px" }}>|</div>
          <a href="https://bafybeifqnjkhxe4adsiwc7xbqtgwpqglkxkw2ccjem2jcbxdk4meew2dlm.ipfs.w3s.link/token.json" style={{  marginTop: "5px",marginRight: "20px", color:'#232323' }}>Credit Register</a> 
          {
            isConnected ? 
            
            <input className="text-center" value={accountAddress} 
                style={{borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '10px'}}
                disabled />
          :
          <Button variant="primary" 
          style={{backgroundColor: '#ebebeb', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
          onClick={connectWallet}>Connect Wallet</Button>
          }
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;