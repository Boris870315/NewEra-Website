import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import shopImage from '../assets/shoping.jpeg';
import drivingRangeImage from '../assets/driving range.jpg';

const Home = () => {
  const navigate = useNavigate();
  const handleShopClick = () => {
    navigate('/shop');
  };
  const handleDrivingRangeClick = () => {
    navigate('/drivingRange');
  };

  return (
    <div className="Home">
      <div className="header">
        <h1>Welcome to New Era</h1>
      </div>
      <div className="image-group">
        <div className="image-container" onClick={handleShopClick}>
          <img src={shopImage} alt="Shop" className="image" />
          <div className="image-text-center">Welcome to Shopping</div>
        </div>
        <div className="image-container" onClick={handleDrivingRangeClick}>
          <img src={drivingRangeImage} alt="Driving Range" className="image" />
          <div className="image-text-center">Driving Range</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
