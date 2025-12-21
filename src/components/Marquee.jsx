import './Marquee.css';

const Marquee = () => {
  return (
    <section className="accordion-strip">
      <div className="strip-panel">
        <div className="panel-content">
          <span className="panel-number">01</span>
          <h2 className="panel-title">VISION</h2>
          <p className="panel-desc">Shaping future brands with bold strategies.</p>
        </div>
      </div>

      <div className="strip-panel">
        <div className="panel-content">
          <span className="panel-number">02</span>
          <h2 className="panel-title">CRAFT</h2>
          <p className="panel-desc">Obsessed with pixel-perfect design details.</p>
        </div>
      </div>

      <div className="strip-panel">
        <div className="panel-content">
          <span className="panel-number">03</span>
          <h2 className="panel-title">IMPACT</h2>
          <p className="panel-desc">Driving real growth for modern businesses.</p>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
