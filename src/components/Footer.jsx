import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2 className="footer-title">LET'S TALK</h2>
          <a href="mailto:hello@coconet.dm" className="footer-email">hello@coconet.dm</a>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="brand-name">coconet</span>
            <span className="brand-tag">Think Digital</span>
          </div>

          <div className="footer-links">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>

          <div className="footer-copy">
            &copy; {currentYear} Coconet. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
