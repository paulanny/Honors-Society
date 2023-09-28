import React from "react";
import { useState, useEffect } from "react";
// import classes from './Navbar.module.css';
import societyLogo from "../Assets/societylogo.png";
import "./Navbar.css";

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
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div class="container">
        <div class="navbarimg">
          <img src={societyLogo} alt="kaapitlogoimage" />

          <div class="nav-btn">
            <div class="nav-links">
              <ul>
                <li class="nav-link">
                  <a href="#">Home</a>
                </li>
                <li class="nav-link">
                  <a href="#">
                    About Us<i class="fas fa-caret-down"></i>
                  </a>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <a href="#">Vision and Mission</a>
                      </li>
                      <li class="dropdown-link">
                        <a href="#">Mentors</a>
                      </li>
                      <li class="dropdown-link">
                        <a href="#">Department</a>
                      </li>
                      <li class="dropdown-link">
                        <a href="#">Letter</a>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <a href="#">
                    Join<i class="fas fa-caret-down"></i>
                  </a>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <a href="#">Join Society</a>
                      </li>
                      <li class="dropdown-link">
                        <a href="#">Terms and Conditions</a>
                      </li>
                      <li class="dropdown-link">
                        <a href="#">2023-2034 plan</a>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <a href="#">Programs</a>
                </li>
                <li class="nav-link">
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="btnmenu">
          <button className="bookkdes" onClick={props.showModal}>
            Member
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
            // onClick={toggleMobileMenu}
            className={`mobilenavlinks ${
              isMobileMenuOpen ? "mobilemenuOpen" : ""
            }`}
          >
            <ul>
              <li class="nav-link">
                <a href="#">Home</a>
              </li>
              <li class="nav-link">
                <a href="#">
                  About Us<i class="fas fa-caret-down"></i>
                </a>
                <div class="dropdown">
                  <ul>
                    <li class="dropdown-link">
                      <a href="#">Vision and Mission</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="#">Mentors</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="#">Department</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="#">Letter</a>
                    </li>
                    <div class="arrow"></div>
                  </ul>
                </div>
              </li>
              <li class="nav-link">
                <a href="#">
                  Join<i class="fas fa-caret-down"></i>
                </a>
                <div class="dropdown">
                  <ul>
                    <li class="dropdown-link">
                      <a href="#">Join Society</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="#">Terms and Conditions</a>
                    </li>
                    <li class="dropdown-link">
                      <a href="#">2023-2034 plan</a>
                    </li>
                    <div class="arrow"></div>
                  </ul>
                </div>
              </li>
              <li class="nav-link">
                <a href="#">Programs</a>
              </li>
              <li class="nav-link">
                <a href="#">FAQs</a>
              </li>
            </ul>
            <button className="menubookkdes" onClick={props.showModal}>
            Join us
          </button>
          </div>
      </div>
    </header>
  );
}
export default NavBar;
