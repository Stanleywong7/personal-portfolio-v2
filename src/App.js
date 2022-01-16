import React from "react";
import "./App.css";
import Logo from "./Logo/Logo";
import Hero from "./Hero/Hero";
import Social from "./Social/Social";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Logo></Logo>
        <Hero></Hero>
        <Social></Social>
      </div>
    </div>
  );
}

export default App;
