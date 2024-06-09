const HomePage = () => {
  return (
    <>
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
      </div>
    </>
  );
};

export default HomePage;
