import React from "react";
import "./home.css";
import chicken from '../assets/chicken.jpg'
import burger from '../assets/burger.jpg'
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/Menu");
  };
  return (
    <div className="home-container">
      <div className="content">
        <div className="text-content">
          <h1>BEST QUALITY FOOD</h1>
          <p>
            Enjoy the finest meals crafted by expert chefs. Our dishes are made
            with the freshest ingredients to give you an unforgettable dining experience.
          </p>
          <button className="cta-button" onClick={handleRedirect}>Explore Menu</button>
        </div>
        <div className="image-section">
          <img src={chicken} alt="Food 1" />
          <img src={burger} alt="Food 2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
