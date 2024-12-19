import React from 'react'
import "../styles/Product.css";
import { IoBagSharp } from "react-icons/io5";
import { FaShirt } from "react-icons/fa6";
import { GiFootprint } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const handleRedirect = (path) => {
    navigate(path);
  }
  return (
    <div className='body'>

  


<div className="card-container">
        <div className="card" style={{ background: '#ff5722' }} onClick={() => handleRedirect('/dress')}>
       <div className='shirt'>
        <FaShirt />
       </div>
          <h2>Dresses</h2>
          <p>Explore our collection of elegant dresses.</p>
        </div>
        <div className="card" style={{ background: '#73766A' }} onClick={() => handleRedirect('/shoes')}>
        <div className='shirt'>
         <GiFootprint />
         </div>
          <h2>Foot Wears</h2>
          <p>Step into style with our trendy shoes.</p>
        </div>
        <div className="card" style={{ background: '#8A4C1C' }} onClick={() => handleRedirect('/shop')}>
        <div className='shirt'>
          <IoBagSharp />
        </div>
        <h2>Bags</h2>
          <p>Find the perfect bag for every occasion.</p>
        </div>
      </div>
    </div>
  )
}

export default Product
