import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ProjectPage from "./assets/pages/Project";
import HomePage from "./assets/pages/Home";
import SkillPage from "./assets/pages/Skills";
import AboutPage from "./assets/pages/About";
import ContactPage from "./assets/pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <label htmlFor="dark-mode" className="dark-mode-toggle">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        <input type="checkbox" id="dark-mode" />

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      {/* <!-- get in toucn section --> */}
      <section id="Contact">
        <center>
          <h1>Get in Touch</h1>
        </center>
        <div class="flex-container get-in-container">
          <a href="">
            {" "}
            <i class="fa-brands fa-linkedin"></i>{" "}
          </a>
          <a href="">
            {" "}
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            {" "}
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>

        <center>
          <h3>OR</h3>
        </center>

        <div class="email-container">
          <a to href="mailto:mawhesjung22@gmail.com">
            <button class="download-btn">
              Mawhesjung143@gmail.com <i class="fa-brands fa-telegram"></i>
            </button>
          </a>
        </div>
      </section>

      {/* // <!-- footer section --> */}

      <div class="foot-pannel1 flex-container">
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

      {/* // <!-- go to top section --> */}
      <div class="go-to-top">
        <a href="#">
          <i class="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
