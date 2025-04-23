import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";



const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </> 
  );
};

export default App;



