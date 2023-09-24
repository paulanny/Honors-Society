import React from "react";
import { useState, useEffect } from "react";
// import classes from './Navbar.module.css';
// import kaapitLogo from "../assets/kaapitLogo.png";
import './Navbar.css';

function NavBar(props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbarimg">
        <p> logoimage</p>
        {/* <img src={kaapitLogo} alt="kaapitlogoimage" /> */}
        <nav className="navbarlists">
          <a>
            About
            <span></span>
          </a>
          <a>
            Learn
            <span></span>
          </a>
          <a>
            Research
            <span></span>
          </a>
          <a>
            Blog
            <span></span>
          </a>
          <a>
            Donate
            <span></span>
          </a>
          <a>
            Get Involved
            <span></span>
          </a>
        </nav>
      </div>

      <div className="btnmenu">
        <button className="bookkdes" onClick={props.showModal}>
          Join us
        </button>
        <div
          className={`menu ${isMobileMenuOpen ? "menuclose" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div className="first"></div>
          <div className="second"></div>
          <div className="third"></div>
        </div>
      </div>
        <div
        onClick={toggleMobileMenu}
          className={`mobilemenulinks ${
            isMobileMenuOpen ? "mobilemenuOpen" : ""
          }`}
        >
          <a onClick={toggleMobileMenu}>
            About
            <span></span>
          </a>
          <a onClick={toggleMobileMenu}>
            Learn
            <span></span>
          </a>
          <a onClick={toggleMobileMenu}>
            Research
            <span></span>
          </a>
          <a onClick={toggleMobileMenu}>
            Blog
            <span></span>
          </a>
          <a onClick={toggleMobileMenu}>
            Donate
            <span></span>
          </a>
         <a onClick={toggleMobileMenu}>
            Get Involved
            <span></span>
          </a>
          <button className="menubookkdes" onClick={props.showModal}>
            Join us
          </button>
        </div>
      </div>
  );
}
export default NavBar;
