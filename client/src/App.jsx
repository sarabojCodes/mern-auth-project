import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      {/* HEADER COMPONENT */}
      <Header />
      {/* HEADER COMPONENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignOut />} />
        <Route path="/profile" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
