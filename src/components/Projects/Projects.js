import React, { useState } from 'react';
import './Projects.css';
import projectsData from './projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Extract unique categories dynamically
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Projects</h2>

      <div className="filter-bar">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => handleFilterChange(category)} 
            className={filter === category ? 'active' : ''}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.length === 0 ? (
          <p>No projects found in this category.</p>
        ) : (
          filteredProjects.map((project) => (
            <div className="project-box" key={project.id}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tags && (
                  <div className="tags">
                    {project.tags.map((tag, index) => (
                      <span className="tag" key={index}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="project-overlay">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github project-icon"></i>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
