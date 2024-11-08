import React, { useState, useEffect, forwardRef } from 'react'; 
import './styles/project.css';

const Project = forwardRef((props, ref) => { 
  const projects = [
    { id: 1, title: 'Project 1', category: 'category1', image: '/2d drawing.jpg' },
    { id: 2, title: 'Project 2', category: 'category1', image: '/2d drawing 2.jpg' },
    { id: 3, title: 'Project 3', category: 'category1', image: '/final model.jpg' },
    { id: 4, title: 'Project 4', category: 'category1', image: '/cover3.png' },
    { id: 5, title: 'Project 5', category: 'category1', image: '/d3.png' },
    { id: 6, title: 'Project 6', category: 'category1', image: '/d4.png' },
    { id: 7, title: 'Project 7', category: 'category2', image: '/b1.png' },
    { id: 8, title: 'Project 8', category: 'category2', image: '/b2.png' },
    { id: 9, title: 'Project 9', category: 'category2', image: '/b4.png' },
    { id: 10, title: 'Project 10', category: 'category3', image: '/s.png' },
    // { id: 10, title: 'Project 10', category: 'category3', image: 'path-to-your-image10.jpg' }
  ];

  const [activeFilter, setActiveFilter] = useState('all');  
  const [filteredProjects, setFilteredProjects] = useState(projects);  

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);  
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter));  
    }
  }, [activeFilter]);  

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);  
  };

  return (
    <section id="project" className="section" ref={ref}> 
       <h1 className='heading'> <i class="fa-solid fa-building"></i>  My Project.</h1>
       <div className="project-out-box">
       <div className="project-cont">
       <p >"Specializing in innovative and sustainable civil engineering solutions,
       we deliver high-quality infrastructure projects that prioritize safety, efficiency, and long-term value for communities and future development."</p></div>
      <div className="filter-buttons">
        <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>
          All Projects
        </button>
        <button className={activeFilter === 'category1' ? 'active' : ''} onClick={() => handleFilterChange('category1')}>
         2D/3D Design
        </button>
        <button className={activeFilter === 'category2' ? 'active' : ''} onClick={() => handleFilterChange('category2')}>
         Billing
        </button>
        <button className={activeFilter === 'category3' ? 'active' : ''} onClick={() => handleFilterChange('category3')}>
         Surving 
        </button>
      </div>
 
      <div className="card-gallery">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`card show`}  // Add 'show' class for animation
            style={{ animationDelay: `${index * 0.1}s` }}  // Stagger effect for animations
          >
            <img src={project.image} alt={project.title} />
            <div className="overlay">
         <h3>{project.title}{<a href=""><i class="fa-solid fa-link"  style={{color: "#ffffff",}}></i></a>
}</h3>
             </div>
          </div>
        ))}
      </div>
      </div>
  <div className="more-cover">
      <a 
      href=" " 
      target="_blank" 
      rel="noopener noreferrer"
      className="learn-more"
    >
      <button className="learn-more-btn">
        <span className="circle" aria-hidden="true">
        <i class="fa-solid fa-arrow-right" style={{color: "#ffffff",}}> </i>
        </span>
        <span className="button-text">View Project</span>
      </button>
    </a>
    </div>
    </section>
  );
});

export default Project;
