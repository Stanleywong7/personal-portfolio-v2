import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div className="welcome-text">
        <h2>Welcome!</h2>
        <p>
          The site is still in development. <br />
          Please feel free to check out my socials below.
        </p>
      </div>

      <div className="social-icons"></div>
    </div>
  );
}

export default Hero;