import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./full_logo.svg";
import "./Logo.css";

function Logo() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div>
      <motion.img 
        src={logo}
        className={isActive ? `rotate` : null}
        id="logo"
        alt="logo"
        onClick={() => setIsActive(!isActive)}
        animate={{
          rotate: isActive ? 180 : 0,
        }}
      />
    </div>
  );
};

export default Logo;
