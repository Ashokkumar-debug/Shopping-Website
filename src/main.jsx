import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
// import './index.css'
// import '../src/styles/CSS/port.css'
import "../src/styles/ecom.css"; // Adjust this to the correct relative path.
// import "../src/styles/Product.css";
// import '../src/styles/js/port.js'
// import Sample from './components/Port.jsx'
// import Counts from './components/counts.jsx'
// import Product from './components/product.jsx'
// import Port from './components/Port.jsx'
// import Port from './Ecom.jsx'
// import Ecom from "../src/components/Ecom.jsx";


createRoot(document.getElementById('root')).render(
  <Fragment>
     <App />
  {/* <Sample/> */}
  {/* <Counts/> */}
  {/* <Product/> */}
  {/* <Port/> */}
  {/* <Ecom/> */}
  </Fragment>,
)















