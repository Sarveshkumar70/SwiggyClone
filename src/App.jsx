import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import FooterContainer from "./components/Footer/FooterContainer";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import SearchFood from "./components/Search/SearchFood";
import SignIn from "./components/SignAndLogIn/SignIn";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchFood />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
}
