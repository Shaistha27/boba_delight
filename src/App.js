import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Ingredients from "./components/Ingredients";
import BestSeller from "./components/BestSeller";
import Menu from "./components/Menu";
import Limited from "./components/Limited";
import Carousel from "./components/Carousel";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import Navbar from "./components/Navbar";
import Band from "./components/Band";


function App() {
  return (
   
    <>
      <Navbar />

      <Home/>
      <Band />
      <Ingredients />
      <BestSeller />
      <Menu />
      <Limited />
      <Carousel />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
