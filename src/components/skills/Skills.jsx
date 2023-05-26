import { forwardRef } from 'react';
import './skills.css';

const Skills = forwardRef((_, ref) => {
  return (
    <div ref={ref} className='skills'>Skills</div>
  );
});

export default Skills;