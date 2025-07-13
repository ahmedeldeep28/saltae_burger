// import libary
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import css style
import "./custom.scss";
import "./App.scss";

// import page & component
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Footer from "./components/Footer";
import ProtectRoute from "./components/ProtectRoute";
import { useDispatch } from "react-redux";
import { getUser } from "./store/slice/userSlice";

function App() {
  let dispatch = useDispatch();
  dispatch(getUser());

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:foodName" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ProtectRoute component={<Cart />} />} />
        <Route
          path="/checkout"
          element={<ProtectRoute component={<CheckOut />} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
