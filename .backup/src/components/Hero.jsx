import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background-text">
        <span>CREATIVE</span>
        <span>AGENCY</span>
      </div>

      <div className="container">
        <div className="hero-main">
          <div className="hero-line line-1">
            <h1 className="outline-text">THINK</h1>
          </div>
          
          <div className="hero-center-piece">
            <div className="brand-box glass-card">
              <span className="brand-icon">🥥</span>
              <h2 className="brand-name">coconet</h2>
              <p className="brand-tagline">Where Fresh Ideas Grow</p>
            </div>
          </div>

          <div className="hero-line line-2">
            <h1 className="filled-text">DIGITAL</h1>
          </div>
        </div>

        <div className="hero-footer">
          <div className="scroll-label">
            <span className="arrow">↓</span> SCROLL TO EXPLORE
          </div>
          <div className="hero-description-text">
            We blend organic creativity with digital precision.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
