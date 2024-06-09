import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
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
                <Link to="#Home">Home</Link>
              </li>
              <li>
                <Link to="#Skills">Skills</Link>
              </li>
              <li>
                <Link to="#Projects">Projects</Link>
              </li>
              <li>
                <Link to="#About">About</Link>
              </li>
              <li>
                <Link to href="#Contact">
                  Contact
                </Link>
              </li>
            </ul>
            <label htmlFor="hamburger-menu">
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
    </div>
  );
};

export default Header;
