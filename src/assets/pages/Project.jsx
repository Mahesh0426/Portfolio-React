const ProjectPage = () => {
  return (
    <>
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
              <a href="https://mahesh0426.github.io/flex-blog/" target="_blank">
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
    </>
  );
};

export default ProjectPage;
