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
    //     <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
    //       <div className="navbarimg">
    //         <img src={societyLogo} alt="kaapitlogoimage" />
    //         <nav className="navbarlists">
    //           <a>
    //             About
    //             <span></span>
    //           </a>
    //           <div className="dropdown">
    //           <ul>
    //           <li className="dropdown-link">
    //             <a> Vision </a>
    //             </li>
    //           <li className="dropdown-link"><a> Vision </a></li>
    //           </ul>
    //           </div>
    //           <a>
    //             Learn
    //             <span></span>
    //           </a>
    //           <a>
    //             Research
    //             <span></span>
    //           </a>
    //           <a>
    //             Blog
    //             <span></span>
    //           </a>
    //           <a>
    //             Donate
    //             <span></span>
    //           </a>
    //           <a>
    //             Get Involved
    //             <span></span>
    //           </a>
    //         </nav>
    //       </div>

    //       <div className="btnmenu">
    //         <button className="bookkdes" onClick={props.showModal}>
    //           Join us
    //         </button>
    //         <div
    //           className={`menu ${isMobileMenuOpen ? "menuclose" : ""}`}
    //           onClick={toggleMobileMenu}
    //         >
    //           <div className="first"></div>
    //           <div className="second"></div>
    //           <div className="third"></div>
    //         </div>
    //       </div>
    //         <div
    //         onClick={toggleMobileMenu}
    //           className={`mobilemenulinks ${
    //             isMobileMenuOpen ? "mobilemenuOpen" : ""
    //           }`}
    //         >
    //           <a onClick={toggleMobileMenu}>
    //             About
    //             <span></span>
    //           </a>
    //           <a onClick={toggleMobileMenu}>
    //             Learn
    //             <span></span>
    //           </a>
    //           <a onClick={toggleMobileMenu}>
    //             Research
    //             <span></span>
    //           </a>
    //           <a onClick={toggleMobileMenu}>
    //             Blog
    //             <span></span>
    //           </a>
    //           <a onClick={toggleMobileMenu}>
    //             Donate
    //             <span></span>
    //           </a>
    //          <a onClick={toggleMobileMenu}>
    //             Get Involved
    //             <span></span>
    //           </a>
    //           <button className="menubookkdes" onClick={props.showModal}>
    //             Join us
    //           </button>
    //         </div>
    //       </div>
    //   );
    // }
    <header>
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
          
        {/* </div> */}
        {/* </div> */}
      </div>
    </header>
  );
}
export default NavBar;
