import "./Footer.css";
import Github from "../Assets/github-mark-white.png";
import Instagram from "../Assets/instagram.png";
import LinkedIn from "../Assets/linkin.png";
import Twitter from "../Assets/twitter.png";
import Gmail from "../Assets/gmail.png";
import looptest from "../Assets/testimage.jpg";
import circle1 from "../Assets/maintop.png";
import circle2 from "../Assets/maintop.png";
import circle3 from "../Assets/maintop.png";
import circle4 from "../Assets/maintop.png";
import Divider from "../Assets/honorsdivider.png";
import societyLogo from "../Assets/psychhonorslogo2.png";

const Footer = () => {
  return (
    <footer>
      <div className="divider2">
        <img src={Divider} alt="dividerimage" />
      </div>
      <div className="loopsection">
        <div className="looping">
          <div className="loopndimage">
            <div className="looptext">
              <p className="loopfirstp">Stay in the loop</p>
              <p className="loopsecp">
                Get highlights directly from us by following our socials Are you
                ready to make history? Are you eager to be part of a community
                that will shape the future of psychology education in Nigeria?
                If so, seize this moment and join the Honors Society of
                Psychology Majors. Together, we will leave an indelible mark on
                the field, empower future generations, and foster a legacy of
                excellence.
              </p>
              <div className="loopbtn">
                <a className="loopbtnsolid">Join Society</a>
              </div>
            </div>
            <div className="loopimage">
              <img src={looptest} alt="loopimage" />
            </div>
            <div className="circles">
              <img className="circle1" src={circle1} alt="circle1" />
              <img className="circle2" src={circle2} alt="circle1" />
              <img className="circle3" src={circle3} alt="circle1" />
              <img className="circle4" src={circle4} alt="circle1" />
            </div>
          </div>
        </div>
      </div>

      <div className="divider2">
        <img src={Divider} alt="dividerimage" />
      </div>

      <div className="allfooterelements">
        <div class="tributendsocials">
          <div className="footerimg">
            <img src={societyLogo} alt="ourlogo" />
          </div>
          <div class="socials">
            <div class="divsoc">
              <a href="https://github.com/paulanny" class="soca">
                <img src={Github} alt="github" />
              </a>
            </div>

            <div class="divsoc">
              <a href="mailto:paulanimashaun20@gmail.com" class="soca">
                <img src={Gmail} alt="gmail" />
              </a>
            </div>

            <div class="divsoc">
              <a
                href="https://www.instagram.com/grace_beneficiary"
                class="soca"
              >
                <img src={Instagram} alt="instagram" />
              </a>
            </div>
            <div class="divsoc">
              <a href="www.linkedin.com/in/animashaun-paul" class="soca">
                <img src={LinkedIn} alt="Linkedin" />
              </a>
            </div>
            <div class="divsoc">
              <a href="https://twitter.com/animashaun_paul" class="soca">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>

        <div className="footertextss">
          <div class="footerlinks">
            <a> Donate</a>
            <a> Join Society</a>
            <a> Get Involved</a>
            <a> Member</a>
            <a> Application</a>
            <a> Book food</a>
          </div>

          <div class="footerlinks">
            <a> Donate</a>
            <a> Join Society</a>
            <a> Get Involved</a>
            <a> Member</a>
            <a> Application</a>
            <a> Book food</a>
          </div>
        </div>
      </div>
      <div class="horizontaldiv"></div>
      <div class="referencep">
        <p class="ref">
          Made with <span>❤️ </span>by Paul Anny
        </p>
        <p className="copyright">© Copyright 2023, All Rights Reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
