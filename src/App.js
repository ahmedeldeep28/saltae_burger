// import libary
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import css style 
import './custom.scss';
import './App.scss';

// import page & component
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Offers from './pages/Offers';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Footer from './components/Footer';
import ProtactRoute from './components/ProtactRoute';
import { useDispatch } from 'react-redux';
import { getUser } from './store/slice/userSlice';



function App() {
  let dispatch = useDispatch();
  dispatch(getUser())

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/saltae_burger/' element={<Home />} />
        <Route path='/saltae_burger/menu' element={<Menu />} />
        <Route path='/saltae_burger/menu/:foodName' element={<Menu />} />
        <Route path='/saltae_burger/about' element={<About />} />
        <Route path='/saltae_burger/offer' element={<Offers />} />
        <Route path='/saltae_burger/contact' element={<Contact />} />
        <Route path='/saltae_burger/cart' element={<ProtactRoute component={<Cart />} />} />
        <Route path='/saltae_burger/checkout' element={<ProtactRoute component={<CheckOut />} />} />
      </Routes>
      <Footer />
    </>
  );
};


export default App;
