import './Services.css';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Advertising',
      description: 'Strategic campaigns that capture attention and drive measurable results across all channels.',
      tags: ['Strategy', 'Media Buying', 'Creative Direction'],
    },
    {
      id: '02',
      title: 'Branding',
      description: 'Crafting unique identities that resonate with your audience and stand the test of time.',
      tags: ['Identity Design', 'Brand Strategy', 'Visual Systems'],
    },
    {
      id: '03',
      title: 'Production',
      description: 'High-quality video, photography, and digital content that brings your vision to life.',
      tags: ['Video Production', 'Photography', 'Motion Graphics'],
    },
    {
      id: '04',
      title: 'Marketing',
      description: 'Data-driven digital marketing solutions designed to grow your reach and engagement.',
      tags: ['Social Media', 'SEO/SEM', 'Performance Marketing'],
    },
    {
      id: '05',
      title: 'Web Development',
      description: 'Custom, responsive websites built with the latest technologies to ensure optimal performance.',
      tags: ['Frontend', 'Backend', 'E-commerce'],
    },
    {
      id: '06',
      title: 'App Development',
      description: 'Intuitive mobile applications designed to provide seamless user experiences across all devices.',
      tags: ['iOS', 'Android', 'React Native'],
    },
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-header">
          <span className="section-subtitle">OUR EXPERTISE</span>
          <h2 className="section-title">WHAT WE DO</h2>
        </div>

        <div className="services-grid-new">
          {services.map((service) => (
            <div key={service.id} className="service-card-new">
              <div className="service-card-header">
                <span className="service-number">{service.id}</span>
              </div>

              <div className="service-card-body">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                <div className="service-card-tags">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag-item">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="service-card-footer">
                <span className="service-link">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
