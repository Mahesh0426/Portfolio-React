const AboutPage = () => {
  return (
    <>
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
              energy that lights up any room you enter. My passion for adventure
              fuels your curiosity, leading you to explore the world with an
              open mind and a thirst for new experiences. I approach challenges
              with resilience and determination, turning obstacles into
              opportunities for growth. My empathy and kindness touch the hearts
              of those around you, fostering deep connections and meaningful
              relationships.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
