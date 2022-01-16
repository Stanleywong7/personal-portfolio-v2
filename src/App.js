import React from "react";
import "./App.css";
import Logo from "./Logo/Logo";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <Hero></Hero>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
