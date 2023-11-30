import logo from './logo.svg';
import './App.css';
import MyNavbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, DropdownButton, Dropdown, ButtonGroup, Card  } from "react-bootstrap";
import React, { useState } from "react";

import { ethers }  from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner()


function App() {
  const [project, setProject] = useState("Select project");
  const [token, setToken] = useState("Total number of tokens available");
  const [carb, setCarb] = useState("Enter total tokens to buy");
  const [benf, setBenf] = useState("Enter name of the beneficiary"); 
  const [add, setAdd] = useState("Enter wallet address"); 
  const [usdc, setUsdc] = useState("Total cost in USDC (Minimum 1USDC)"); 
  
  if (carb==='') setCarb('Enter total tokens to buy')
  if (benf==='') setBenf('Enter name of the beneficiary')
  if (add==='') setAdd('Enter wallet address')

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };
  const handleCarbonChange = (event) => {
    setCarb(event.target.value);
    const val = Math.round(event.target.value*(120/100),2)
    setUsdc('Total cost in USDC (Minimum 1USDC) :- '+val);
  };
  const handleBenfChange = (event) => {
    setBenf(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAdd(event.target.value);
  };
  const handleUSDCChange = (event) => {
    setUsdc(event.target.value);
  };
  const handleProject = (event) => {
    setProject(event)
    console.log(event)
    if (event==='400 MW Solar Power Project at Bhadla, Rajasthan (GS7071)')
    {
      setToken('Total number of tokens available :- 100');
    }
    console.log(token)
  };
  return (
    <div>
      <MyNavbar/>
    <br/><br/>
    <Container>
      <Row>
      <Col md={6} style={{ border: "1px solid black", padding: "20px"}}>
              <div className="d-flex flex-column justify-content-between">

              <DropdownButton 
              as={ButtonGroup}
              variant="secondary"
              id="dropdown-menu-align-responsive-1"
              style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
              title={project} onSelect={handleProject}>
                <Dropdown.Item eventKey='400 MW Solar Power Project at Bhadla, Rajasthan (GS7071)'>400 MW Solar Power Project at Bhadla, Rajasthan (GS7071)</Dropdown.Item>
              </DropdownButton>

                <input className="text-center" value={token} 
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleTokenChange} disabled />

                <input className="text-center" placeholder={carb} 
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleCarbonChange}/>

                <input className="text-center"  placeholder={benf}
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleBenfChange}/> 

                <input className="text-center" placeholder={add} 
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleAddressChange}/> 

                <input className="text-center" value={usdc} 
                style={{marginBottom: "10px",borderWidth:'1.3px', color: '#232323', borderColor:'#232323', borderRadius: '3px'}}
                onChange={handleUSDCChange} disabled />
                </div>
                </Col>
      </Row>
      <Row>
        <Col md={1}>
        <Card body>This is some text within a card body.</Card>;
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
