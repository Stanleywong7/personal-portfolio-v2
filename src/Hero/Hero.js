import React from "react";
import Typical from "react-typical";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div className="welcome-text" id="welcome-text">
        <h1>Hi 👋, my name is <b>Stanley Wong</b> </h1>
        <p className="prompt-development" id="prompt-development">
          <Typical
            loop={Infinity}
            wrapper='n'
            steps={[
              "The website is still in development. 👷",
              1000,
              "Please feel free to contact me below. ⬇️",
              3000,
            ]}
          />
        </p>
      </div>
    </div>
  );
}

export default Hero;
