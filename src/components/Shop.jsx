import React, { useState } from "react";
import bag1 from "../assets/laptop.jpeg/";
import bag2 from "../assets/casualbag.jpeg/";
import bag3 from "../assets/office.jpeg/";
import bag4 from "../assets/party.jpeg/";
import bag5 from "../assets/hand.jpeg/";
import bag6 from "../assets/musthave-10.png/";

const Shop = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { imageSrc: bag1, name: "Laptop Bag", price: 1200 },
    { imageSrc: bag2, name: "Casual Bag", price: 899 },
    { imageSrc: bag3, name: "Office Bag", price: 1599 },
    { imageSrc: bag4, name: "Party Bag", price: 1299 },
    { imageSrc: bag5, name: "Hand Bag", price: 699 },
    { imageSrc: bag6, name: "School Bag", price: 599 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const Card = ({ imageSrc, name, price }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    const firstClick = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setTotalPrice(price * newQuantity);
    };

    const secondClick = () => {
      if (quantity > 1) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        setTotalPrice(price * newQuantity);
      }
    };

    const handleOrderNow = () => {
      setShowForm(true);
    };

    return (
      <div style={cardStyle}>
        <h1 style={titleStyle}>{name}</h1>
        <div style={cardContentStyle}>
          <img src={imageSrc} alt="Product" style={imageStyle} />
          <div>
            <button style={buttonStyle} onClick={firstClick}>
              +
            </button>
            <button style={buttonStyle} onClick={secondClick}>
              -
            </button>
            <h1 style={infoStyle}>Total Quantity: {quantity}</h1>
            <h1 style={infoStyle}>Price: {totalPrice.toLocaleString("en-US")} ₹</h1>
            <button style={orderButtonStyle} onClick={handleOrderNow}>
              Order Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Styles
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 10px 20px rgba(0.5, 0.3, 0.3, 0.3)",
    maxWidth: "400px",
    margin: "20px",
    backgroundColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
  };

  const cardContentStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const titleStyle = {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  };

  const buttonStyle = {
    margin: "10px",
    padding: "1px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ff1e00",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const orderButtonStyle = {
    marginTop: "10px",
    padding: "8px 20px",
    fontSize: "15px",
    color: "white",
    backgroundColor: "#ff1e00",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  };

  const infoStyle = {
    fontSize: "18px",
    color: "#555",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const formStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    maxWidth: "300px",
    textAlign: "center",
    animation: showForm ? "fadeIn 0.5s ease-out, fadeOut 0.5s ease-out 2.5s" : "",
  };

  const inputStyle = {
    display: "block",
    marginBottom: "15px",
    padding: "10px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const submitButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    zIndex: 1000,
    animation: showPopup
      ? "fadeIn 0.5s ease-out, fadeOut 0.5s ease-out 2.5s"
      : "",
    maxWidth: "300px",
  };

  const popupTitleStyle = {
    fontSize: "20px",
    color: "#28a745",
    marginBottom: "10px",
  };

  const popupMessageStyle = {
    fontSize: "16px",
    color: "#555",
  };

  const popupAnimationStyle = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translate(-50%, -60%); }
      to { opacity: 1; transform: translate(-50%, -50%); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translate(-50%, -50%); }
      to { opacity: 0; transform: translate(-50%, -40%); }
    }
  `;
  const searchBarStyle = {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const searchInputStyle = {
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
    width: "300px",
  };


  return (
    <>

<div style={searchBarStyle}>
        <input
          type="text"
          placeholder="Search for Bags..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={searchInputStyle}
        />
      </div>
      <style>{popupAnimationStyle}</style>
      {showPopup && (
        <div style={popupStyle}>
          <h2 style={popupTitleStyle}>Your order has been successfully placed.</h2>
          <p style={popupMessageStyle}></p>
        </div>
      )}
      {showForm && (
        <form onSubmit={handleFormSubmit} style={formStyle}>
          <h2>Enter Your Details</h2>
          <input
            type="text"
            name="name"
            value={customerDetails.name}
            onChange={handleInputChange}
            placeholder="Name"
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="address"
            value={customerDetails.address}
            onChange={handleInputChange}
            placeholder="Address"
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="email"
            value={customerDetails.email}
            onChange={handleInputChange}
            placeholder="Email"
            style={inputStyle}
            required
          />
          <input
            type="number"
            name="phone"
            value={customerDetails.phone}
            onChange={handleInputChange}
            placeholder="Number"
            style={inputStyle}
            required
          />
          <button type="submit" style={submitButtonStyle}>
            Confirm Order
          </button>
        </form>
      )}
      
      <div style={gridStyle}>
        {filteredProducts.map((product) => (
          <Card
            key={product.name}
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
