import React, { forwardRef } from 'react';
import './project.css';

const Projects = forwardRef((_, ref) => {
  return (
    <div ref={ref} className='project'>Projects</div>
  );
});

export default Projects;