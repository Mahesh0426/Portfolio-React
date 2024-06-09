const ContactPage = () => {
  return (
    <>
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
              Mawhesjung143@gmail.com <i className="fa-brands fa-telegram"></i>
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
