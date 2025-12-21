import './Marquee.css';

const Marquee = () => {
  const items = [
    "THINK DIGITAL", "🥥", "COCONET", "🥥", "FRESH IDEAS", "🥥",
    "THINK DIGITAL", "🥥", "COCONET", "🥥", "FRESH IDEAS", "🥥",
    "THINK DIGITAL", "🥥", "COCONET", "🥥", "FRESH IDEAS", "🥥"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.map((item, index) => (
          <span key={index} className="marquee-item">{item}</span>
        ))}
      </div>
      <div className="marquee-content" aria-hidden="true">
        {items.map((item, index) => (
          <span key={`clone-${index}`} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
