import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import RootLayouts from "./layouts/RootLayouts";
import Ecom from "./components/Ecom";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Dress from "./components/dress";
import Shoes from "./components/Shoes"
import About from "./components/About"



const router = createBrowserRouter(
 
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts/>}>
          
          <Route index element={<Ecom/>}/>
          <Route path="product" element={<Product/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="dress" element={<Dress/>}/>
         <Route path="Shoes" element={<Shoes/>}/>
         <Route path="about" element={<About/>}/>

 

    </Route>
  )
  
)
  



function App() {
  return (
  
<RouterProvider router={router}/>
  
  );
}

export default App
