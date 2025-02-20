// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './Component/Header/Header';
// import Hero from './Component/Hero/Hero';
// // import Testing from './Testing';
// import "./App.css"
// import Companies from './Component/Companies/Companies';
// import Residencies from './Component/Residencies/Residencies';
// import Value from './Component/Value/Value';
// import Contact from './Component/Contact/Contact';
// import GetStarted from './Component/GetStarted/GetStarted';
// import Footer from './Component/Footer/Footer';

// function App() {
//   return (
//     <div className='App'>
 
//   <div>
//     <div className='white-gradient'/>
//  <Header/>
//   <Hero/>  
//    </div> 
//   <Companies/>
//   <Residencies/>
//   <Value/>
//   <Contact/>
//   <GetStarted/>
//   <Footer/>
//   </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Companies from "./Component/Companies/Companies";
import Residencies from "./Component/Residencies/Residencies";
import Value from "./Component/Value/Value";
import Contact from "./Component/Contact/Contact";
import GetStarted from "./Component/GetStarted/GetStarted";
import Footer from "./Component/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header /> {/* The header will always be visible */}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/residencies" element={<Residencies />} />
        <Route path="/value" element={<Value />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>

      <Footer /> {/* The footer will always be visible */}
    </Router>
  );
}

export default App;
