import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="manifesto-wrapper">
          <p className="manifesto-text">
            WE BELIEVE IN THE POWER OF <span className="highlight">DIGITAL</span> TO TRANSFORM BUSINESSES. 
            WE DON'T JUST BUILD WEBSITES; WE CRAFT <span className="highlight">EXPERIENCES</span> THAT 
            LEAVE A LASTING IMPRESSION.
          </p>
          
          <div className="about-stats-grid">
            <div className="stat-box">
              <span className="stat-num">50+</span>
              <span className="stat-label">Clients Worldwide</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">100%</span>
              <span className="stat-label">Project Success</span>
            </div>
            <div className="stat-box">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
