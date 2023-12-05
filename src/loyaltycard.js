import { useState } from "react";
import './css/LoyaltyCard.css';

const LoyaltyCard = () => {
    // Use state to manage user information and carbon credits
    const [userInfo, setUserInfo] = useState({
        fullName: 'John Doe',
        email: 'john@example.com',
      });
    
    const [carbonCredits, setCarbonCredits] = useState(100);

    // Function to simulate earning credits
    const earnCredits = () => {
        // Implement logic for earning credits
        alert('Earning credits...');
    };

    // Function to simulate redeeming credits
    const redeemCredits = () => {
        // Implement logic for redeeming credits
        alert('Redeeming credits...');
    };

    return (
        <div className="loyalty-card">
      <img src="loyalty_card_logo.png" alt="Loyalty Card Logo" />
      <div className="user-info">
        <p><strong>Full Name:</strong> {userInfo.fullName}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
      </div>
      <div className="carbon-credits">
        <p><strong>Carbon Credits:</strong> {carbonCredits}</p>
      </div>
      <div className="actions">
        <button onClick={redeemCredits}>Redeem Credits</button>
        <button onClick={earnCredits}>Earn Credits</button>
      </div>
    </div>
    );
}

export default LoyaltyCard;
