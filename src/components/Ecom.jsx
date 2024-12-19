import React from "react";
import "../styles/ecom.css";
import {Card} from "react-bootstrap";

// Import images
import headerImage from "../assets/header.png";
import collectionImage from "../assets/collection.jpg";
import sale1Image from "../assets/sale-1.jpg";
import sale2Image from "../assets/sale-2.jpg";
import sale3Image from "../assets/sale-3.jpg";
import musthave1Image from "../assets/musthave-1.png";
import musthave2Image from "../assets/musthave-2.png";
import musthave3Image from "../assets/musthave-3.png";
import musthave4Image from "../assets/musthave-4.png";
import { useNavigate } from 'react-router-dom';

const Ecom = () => {
  const navigate = useNavigate();  // Initialize navigate



  // Redirect function for button click
  const handleButtonClick = (path) => {
    navigate(path);  // Navigate to the path when the button is clicked
  };
  return (
    <div>
      
      

      <header>
        <div className="section__container header__container">
          <div className="header__content">
            <p>EXTRA 55% OFF IN SPRING SALE</p>
            <h1>Discover & Shop <br /> The Trend $s19</h1>
            <button className="btn" onClick={() => handleButtonClick('/product')}>SHOP NOW</button>
          </div>
          <div className="header__image">
            <img src={headerImage} alt="Header" />
          </div>
        </div>
      </header>
<div className="move">
      <div className="bor"></div>
      <div className="bottom_image">
        <h1 className="bot_h1">New Collections</h1>
        <p>#35 COMBO COLLECTION</p>
        <button className="btn2"  onClick={() => handleButtonClick('/product')}>SHOP NOW</button>
        <img src={collectionImage} alt="Collection" />
      </div>
      </div>

      <div className="on_sale">
        <h1 className="bot_h2">ON SALE</h1>
      </div>

      <div className="sale__grid">
        <div className="sale__card">
          <img src={sale1Image} alt="Sale 1" />
          <div className="sale__content">
            <p className="sale__subtitle">MAN OUTERWEAR</p>
            <h4 className="sale__title">
              sale <span>40%</span> off
            </h4>
            <p className="sale__subtitle">- DON'T MISS -</p>
            <button className="btn sale__btn"  onClick={() => handleButtonClick('/product')}>SHOP NOW</button>
          </div>
        </div>
        <div className="sale__card">
          <img src={sale2Image} alt="Sale 2" />
          <div className="sale__content">
            <p className="sale__subtitle">WOMAN T-SHIRT</p>
            <h4 className="sale__title">
              sale <span>25%</span> off
            </h4>
            <p className="sale__subtitle">- DON'T MISS -</p>
            <button className="btn sale__btn"  onClick={() => handleButtonClick('/product')}>SHOP NOW</button>
          </div>
        </div>
        <div className="sale__card">
          <img src={sale3Image} alt="Sale 3" />
          <div className="sale__content">
            <p className="sale__subtitle">JACKETS</p>
            <h4 className="sale__title">
              sale <span>20%</span> off
            </h4>
            <p className="sale__subtitle">- DON'T MISS -</p>
            <button className="btn sale__btn"  onClick={() => handleButtonClick('/product')}>SHOP NOW</button>
          </div>
        </div>
      </div>

      <h2 className="must">Must Have</h2>
      <div className="mustt">
  <div className="image1">
    <img src={musthave1Image} alt="Must Have 1" />
    <h4>Basic long sleeve T-shirt</h4>
    <h5>
      <del>$45.00</del> $75.00
    </h5>
  </div>

  <div className="image2">
    <img src={musthave2Image} alt="Must Have 2" />
    <h4>Ribbed T-shirt with buttons</h4>
    <h5>
      <del>$75.00</del> $45.00
    </h5>
  </div>

  <div className="image3">
    <img src={musthave3Image} alt="Must Have 3" />
    <h4>Pink with jeans</h4>
    <h5>
      <del>$55.00</del> $50.00
    </h5>
  </div>

  <div className="image4">
    <img src={musthave4Image} alt="Must Have 4" />
    <h4>Black Heals</h4>
    <h5>
      <del>$40.00</del> $35.00
    </h5>
  </div>

  {/* Second set of images (duplicates for continuous scroll) */}
  <div className="image1">
    <img src={musthave1Image} alt="Must Have 1" />
    <h4>Basic long sleeve T-shirt</h4>
    <h5>
      <del>$45.00</del> $75.00
    </h5>
  </div>

  <div className="image2">
    <img src={musthave2Image} alt="Must Have 2" />
    <h4>Ribbed T-shirt with buttons</h4>
    <h5>
      <del>$75.00</del> $45.00
    </h5>
  </div>

  <div className="image3">
    <img src={musthave3Image} alt="Must Have 3" />
    <h4>Pink with jeans</h4>
    <h5>
      <del>$55.00</del> $50.00
    </h5>
  </div>

  <div className="image4">
    <img src={musthave4Image} alt="Must Have 4" />
    <h4>Black Heals</h4>
    <h5>
      <del>$40.00</del> $35.00
    </h5>
  </div>
  
</div>


    
    
        
    
        
         {/* <div className="cardd">
      <Card border="primary" className="pt-5 mt-5 border-black d-flex justify-content-center align-items-center "  style={{ width: '30rem' }}>
        <Card.Header><b>About</b></Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
      </Card>
      </div> */}
         
      
    </div>
   
  );
};

export default Ecom;
