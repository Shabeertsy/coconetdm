import './Clients.css';

const Clients = () => {
  const clients = [
    'I Trust Eye Hospital', 'Gleamia Fashion'
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
