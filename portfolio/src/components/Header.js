import React from "react";
import Typist from "react-typist";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

import scrollArrow from "../assets/scroll-down.png";


function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <Typist startDelay={300}>
          <h1>
            Hi There!
            <Typist.Delay ms={100} />
            <br />
            {/* //<Typist.Backspace count={75} delay={2900} /> */}
            I'm Ala,
            <br />A Junior Web Developer
          </h1>
        </Typist>
        <div className="header-overlay-box"
         data-aos="fade-left"
         data-aos-delay="2500"
         data-aos-duration="2000">
        <div
      className="contact-wrapper"
      id="contact"
    >
      <h2 className="custom-underline">contact me.</h2>
      <div className="contact-container">
        <div className="contact-text-container">
          <p>
            I am currently available for work. If you feel that I may be the
            right fit for your company, please don't hestitate to get in touch.{" "}
          </p>
        </div>
        <div
          className="contact-details-container">
          <p>
            <FaMailBulk /> ala@alaworks.io
          </p>
          <p></p>
          <a href="https://github.com/Ala161092">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ala-abdelrahman/">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </div>
        
        </div>
      </div>
      <div>
        <img className="arrow" src={scrollArrow} alt="Scroll Down Arrow" />
      </div>
    </div>
  );
}

export default Header;
