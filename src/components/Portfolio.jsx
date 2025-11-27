import { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: '01',
      title: 'Neon Commerce',
      category: 'Web Development',
      image: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
      description: 'Futuristic E-commerce'
    },
    {
      id: '02',
      title: 'Future Finance',
      category: 'App Design',
      image: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      description: 'Next-Gen Banking'
    },
    {
      id: '03',
      title: 'Aero Systems',
      category: 'Branding',
      image: 'linear-gradient(135deg, #333 0%, #000 100%)',
      description: 'Aerospace Identity'
    },
    {
      id: '04',
      title: 'Urban Pulse',
      category: 'Marketing',
      image: 'linear-gradient(135deg, #222 0%, #111 100%)',
      description: 'Smart City Campaign'
    }
  ];

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="portfolio-header">
          <span className="section-subtitle">SELECTED WORK</span>
        </div>

        <div className="portfolio-layout">
          {/* Left Side: Project List */}
          <div className="project-list">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-list-item ${activeProject === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="item-header">
                  <span className="item-id">{project.id}</span>
                  <h3 className="item-title">{project.title}</h3>
                </div>
                <div className="item-meta">
                  <span className="item-category">{project.category}</span>
                  <span className="item-arrow">→</span>
                </div>
              </div>
            ))}
            
            <div className="portfolio-cta-mobile">
              <button className="btn btn-secondary">View All</button>
            </div>
          </div>

          {/* Right Side: Sticky Image Preview */}
          <div className="project-preview">
            <div 
              className="preview-image"
              style={{ background: projects[activeProject].image }}
            >
              <div className="preview-overlay">
                <span className="preview-desc">{projects[activeProject].description}</span>
                <button className="preview-btn">View Case Study</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
