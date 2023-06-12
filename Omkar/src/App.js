import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import HomeNavbar from './Component/HomeNavbar'
import Login from "./Component/Login"
import Subcategory from "./Component/subcategories"
import Product from './Component/products'
import Footer from './Component/footer'
export default function App() {
  return (
    <BrowserRouter>
      <HomeNavbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/subcategory/:code' element={<Subcategory />} />
          <Route path='/productsbycat/:code' element={<Product/>}/>
      
      </Routes>
     <Footer/>
    </BrowserRouter>
  )
}
