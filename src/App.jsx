import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <!-------- DARK MODE TOGGLE ---------> */}
      <label for="dark-mode" classNameName="dark-mode-toggle">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="dark-mode" />

      <header>
        {/* <!-- nav bar --> */}
        <nav>
          <div className="nav-bar flex-container">
            <div className="logo">
              <div className="logo-container">
                <span className="logo-title">Mahesh</span>
                <span className="line">|</span>
                <span>Soft.Engineer</span>
              </div>
            </div>

            <ul className="nav-items flex-container">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Skills">Skills</a>
              </li>
              <li>
                <a href="#Projects">Projects</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            {/* <!---------- Hamburger Menu -------------> */}
            <label for="hamburger-menu">
              <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="hamburger-menu" />
            <div className="side-menu">
              <ul className="side-nav-items flex-container">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* <!-- Hero section --> */}
      <div className="wrapper-container">
        <section id="Home">
          <div className="grid-container hero-section">
            <div className="intro-text">
              <p>
                Hi I am <b>Mahesh Kunwar.</b>
              </p>
              <p>
                <b>Software Engineer</b>
              </p>
              <br />
              <p>I love coding!</p>
              <a href="assets/mahesh resume new.pdf" download>
                <button className="download-btn">
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>

            <div className="image-grid-item">
              <img src="assets/me.png" alt="profile-image" />
            </div>
          </div>
        </section>

        {/* <!-- sumary section --> */}
        <section>
          <div className="summary-container flex-container">
            <div className="flex-container">
              <i className="fa-solid fa-award"></i>
              <div>
                <span>IT </span>
                <p>Graduate</p>
              </div>
            </div>
            <div className="vertical-line">|</div>

            <div className="flex-container">
              <i className="fa-solid fa-award"></i>
              <div>
                <span>5+ Projects </span>
                <p>Completed</p>
              </div>
            </div>
            <div className="vertical-line">|</div>

            <div className="flex-container">
              <i className="fa-solid fa-award"></i>
              <div>
                <span>1 Year</span>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Skills section --> */}
        <section id="Skills">
          <center>
            <h2>Skills</h2>
          </center>
          <div className="skills-container flex-container">
            <div>
              <i className="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>

            <div>
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>

            <div>
              <i className="fa-brands fa-js"></i>
              <p>JS</p>
            </div>

            <div>
              <i className="fa-brands fa-square-github"></i>
              <p>Github</p>
            </div>

            <div>
              <i className="fa-brands fa-figma"></i>
              <p>Figma</p>
            </div>
          </div>
        </section>

        {/* <!-- my recent work --> */}
        <section id="Projects">
          <center>
            <h2>My recent works</h2>
          </center>
          <div className="flex-container">
            {/* <!-- recent work card 1 --> */}
            <div className="recent-work-card">
              <div className="card-img">
                <img src="assets/box model.png" alt="works" />
              </div>
              <div className="card-icon">
                <a
                  href="https://mahesh0426.github.io/css-box-model/"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </a>
                <h4>Box Model</h4>
                <p>HTML|CSS</p>
              </div>
            </div>

            {/* <!-- recent work card 2 --> */}
            <div className="recent-work-card">
              <div className="card-img">
                <img src="assets/flash.png" alt="works" />
              </div>
              <div className="card-icon">
                <a
                  href="https://mahesh0426.github.io/flash-animation/"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </a>
                <h4>Flash Animation</h4>
                <p>HTML|CSS</p>
              </div>
            </div>

            {/* <!-- recent work card 3 --> */}
            <div className="recent-work-card">
              <div className="card-img">
                <img src="assets/flex box.png" alt="works" />
              </div>
              <div className="card-icon">
                <a
                  href="https://mahesh0426.github.io/flex-blog/"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </a>
                <h4>Flex box</h4>
                <p>HTML|CSS</p>
              </div>
            </div>

            {/* <!-- recent work card 4 --> */}
            <div className="recent-work-card">
              <div className="card-img">
                <img src="assets/forms.png" alt="works" />
              </div>
              <div className="card-icon">
                <a
                  href="https://mahesh0426.github.io/Login-form/"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </a>
                <h4>HTML forms</h4>
                <p>HTML|CSS</p>
              </div>
            </div>

            {/* <!-- recent work card 5 --> */}
            <div className="recent-work-card">
              <div className="card-img">
                <img src="assets/grid.png" alt="works" />
              </div>
              <div className="card-icon">
                <a
                  href="https://mahesh0426.github.io/grid-layout-css/"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </a>
                <h4>CSS grid</h4>
                <p>HTML|CSS</p>
              </div>
            </div>

            {/* <!-- recent work card 6 --> */}
            <div className="recent-work-card">
              <div className="card-img">
                <img src="assets/sales.png" alt="works" />
              </div>
              <div className="card-icon">
                <a href="https://mahesh0426.github.io/sales/" target="_blank">
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-chrome"></i>
                </a>
                <h4>Sales Page</h4>
                <p>HTML|CSS</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- about me section  --> */}
        <section className="about-me-section id=About">
          <center>
            <h2>About me</h2>
          </center>
          <div className="about-me-container flex-container">
            <div className="flex-container">
              <img src="assets/me.png" alt="profile-image" />
            </div>
            <div>
              <h4>Mahesh Kunwar</h4>
              <p>
                I am a vibrant soul, dancing through life with an infectious
                energy that lights up any room you enter. My passion for
                adventure fuels your curiosity, leading you to explore the world
                with an open mind and a thirst for new experiences. I approach
                challenges with resilience and determination, turning obstacles
                into opportunities for growth. My empathy and kindness touch the
                hearts of those around you, fostering deep connections and
                meaningful relationships.
              </p>
            </div>
          </div>
        </section>

        {/* <!-- get in toucn section --> */}
        <section id="Contact">
          <center>
            <h1>Get in Touch</h1>
          </center>
          <div className="flex-container get-in-container">
            <a href="">
              {" "}
              <i className="fa-brands fa-linkedin"></i>{" "}
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          <center>
            <h3>OR</h3>
          </center>

          <div className="email-container">
            <a href="mailto:mawhesjung22@gmail.com">
              <button className="download-btn">
                Mawhesjung143@gmail.com{" "}
                <i className="fa-brands fa-telegram"></i>
              </button>
            </a>
          </div>
        </section>
      </div>

      {/* <!-- footer section --> */}
      <footer>
        <div className="foot-pannel1 flex-container">
          <ul>
            <p>Links</p>
            <a href="#">Home</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
          </ul>
          <ul>
            <p>Social Links</p>
            <a href="#">Linkedin</a>
            <a href="#">Facebook</a>
            <a href="#">Github</a>
            <a href="#">Youtube</a>
          </ul>
        </div>

        <center>
          <p>© Copy right all reserved. Made by Me😍</p>
        </center>
      </footer>

      {/* <!-- go to top section --> */}
      <div className="go-to-top">
        <a href="#">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
