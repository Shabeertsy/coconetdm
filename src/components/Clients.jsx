import './Clients.css';

const Clients = () => {
  // Using text logos for now - you can replace with actual logo images
  const clients = [
    'ACME CORP', 'TECH SOLUTIONS', 'DIGITAL WAVE', 'FUTURE LABS',
    'BRAND CO', 'INNOVATE INC', 'PIXEL STUDIO', 'CREATIVE HUB',
    'ACME CORP', 'TECH SOLUTIONS', 'DIGITAL WAVE', 'FUTURE LABS' // Duplicates for seamless loop
  ];

  return (
    <section className="section clients">
      <div className="container">
        <div className="clients-header">
          <span className="section-subtitle">TRUSTED BY</span>
          <h2 className="section-title">OUR CLIENTS</h2>
        </div>
      </div>
      
      <div className="clients-marquee">
        <div className="clients-track">
          {clients.map((client, index) => (
            <div key={index} className="client-item">
              <span className="client-logo">{client}</span>
            </div>
          ))}
        </div>
        <div className="clients-track" aria-hidden="true">
          {clients.map((client, index) => (
            <div key={`clone-${index}`} className="client-item">
              <span className="client-logo">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
