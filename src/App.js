import logo from './logo.svg';
import './App.css';
import MyNavbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Card  } from "react-bootstrap";
import React, { useState } from "react";

import { ethers }  from "ethers";

// connect to metamask
// async function ConnectToMetamask () {
//   const [address, setDefaultAddress] = useState('');
//   const [provider, setDefaultProvider] = useState('');
//   const [signer, setDefaultSigner] = useState('');
  
//   try {
//     // Check if metamask installed
//     if (window.ethereum) {
//       //Request account access if not already authorized
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const provider = new ethers.providers.Web3Provider(window.ethereum)
//       await provider.send("eth_requestAccounts", []);
//       const signer = provider.getSigner();
//       const address = await signer.getAddress();

//       setDefaultAddress(address);
//     } else {
//       console.error('MetaMask is not installed');
//     }
//   } catch (error) {
//     console.error(error);
//   }
//   return [provider, signer, address];
// };




// async function myname() {
//   const name = await signercontract.issueCredits("0xA03ab8a9d99F3779085BCc528b35EaCD949aeC1e", '1000000000000000000');
// console.log(name);
// }

// myname()


function App() {
  const [benf, setBenf] = useState("Enter name of the beneficiary"); 
  const [address, setAdd] = useState("Enter wallet address"); 
  const [token, setToken] = useState("Enter total tokens to buy");
  
  if (benf==='') setBenf('Enter name of the beneficiary');
  if (address==='') setAdd('Enter wallet address');
  if (token==='') setToken('Enter total tokens to buy');

  const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const tokbuyabi = [
    "function issueCredits(address to, uint256 amount)",
    "function redeemCredits(uint256 amount)",
  ]
  const tokAddress = "0xDC373f0D2a019109285bb315b12075190763fCB3";
  const tokcontract = new ethers.Contract(tokAddress, tokbuyabi, provider);
  const signercontract = new ethers.Contract(tokAddress, tokbuyabi, signer);
  
  const handleBenfChange = (event) => {
    setBenf(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAdd(event.target.value);
  };
  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };
  const handleClick = () => {
    const assignCredits = signercontract.issueCredits(address, token);
  }
  return (
    <div>
      <MyNavbar/>
    <br/><br/>
    <Container>
      <Row>
      <Col md={6} style={{ border: "1px solid black", padding: "20px"}}>
          <div className="d-flex flex-column justify-content-between">
            <input className="text-center"  placeholder={benf}
            style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
            onChange={handleBenfChange}/> 

            <input className="text-center" placeholder={address} 
            style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
            onChange={handleAddressChange}/>

            <input className="text-center" placeholder={token} 
            style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
            onChange={handleTokenChange}/>
          <Button variant="secondary" size="sm" onClick={handleClick}>Issue credits</Button>
            </div>
            </Col>
      </Row>
      <Row>
        <Col md={1}>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
