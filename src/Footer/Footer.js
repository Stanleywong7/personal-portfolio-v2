import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import { SocialContainer, SocialIcons } from "./FooterStyles";
const Footer = () => {
  return (
    <div>
      <SocialContainer>
        <SocialIcons href="https://www.linkedin.com/in/stanleywong7/">
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/stanleywong7/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href="mailto:stanleywong7@gmail.com">
          <AiFillMessage size="3rem"></AiFillMessage>
        </SocialIcons>
      </SocialContainer>
    </div>
  );
};

export default Footer;
