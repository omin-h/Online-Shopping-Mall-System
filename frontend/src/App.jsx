import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import Shops from "./pages/shops";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

import CustomerSupport from "./pages/customer_support";

import Budget from "./pages/budget";
import ShoppingList from "./pages/shoppingList";
import ProductEx from "./pages/productEx";


const App = () => {
  return (



    <Routes> 

      <Route path="/" element={<Home />} />
        
        {/* Avishka's routes */}
      <Route path="/shops" element={<Shops />} />
      <Route path="/shop/:name" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      
      {/* dunal's routes */}
      <Route path="/customer_support" element={<CustomerSupport />} />


      {/* omin's routes */}
      <Route path="/budget" element={<Budget />} />
      <Route path="/shoppingList" element={<ShoppingList />} />
      <Route path="/productEx" element={<ProductEx />} />
  
      
    </Routes>

  

  )
}

export default App;