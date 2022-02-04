import React, { useState } from "react";
import { Link } from "react-scroll";

function Nav() {
  const [colorNavDisplay, setColorNavDisplay] = useState(false);

  const changeNavDisplay = () => {
    if (window.scrollY >= 50) {
      setColorNavDisplay(true);
    } else {
      setColorNavDisplay(false);
    }
  };
  window.addEventListener("scroll", changeNavDisplay);
  return (
    <div className="nav-container">
      <nav className={colorNavDisplay ? "navSolid" : "nav"}>
        <ul className="nav-links">
          <li className="menu-links">
            <Link to="about" spy={true} smooth={true}>
              About Me
            </Link>
          </li>
          <li className="menu-links">
            <Link to="projects" spy={true} smooth={true}>
              Projects
            </Link>
          </li>
          <li className="contact-link">
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
