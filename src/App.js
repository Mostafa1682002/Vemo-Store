import { useEffect, useState } from 'react';
import './App.css';
import MyNav from './Components/MyNav.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Components/HomePages/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/ProductPages/Products';
import ProductDetalis from './Components/ProductDetails/ProductDetalis';
import {Navigate} from 'react-router-dom'
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AboutPage from './Components/AboutPage/AboutPage';
import axios from 'axios';
import ContactUs from './Components/ContactUs/ContactUs';
function App() {
  let [products,setProducts]=useState([]);
  useEffect(()=>{
      axios.get("https://fakestoreapi.com/products").then((response)=>{
          console.log(response.data);
          setProducts(response.data);
      }).catch(error=>{
          console.log(error);
      })
  },[])


    return (
      <div className="App">
        <MyNav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<ErrorPage/>} />
          <Route path='home' element={<Navigate to="/"/>} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='product' element={<Products products={products}/>} />
          <Route path='product/:id' element={<ProductDetalis products={products}/>}   />
          <Route path='contactus' element={<ContactUs/>}   />
        </Routes>
        <Footer/>
      </div>
    );
}


export default App;
