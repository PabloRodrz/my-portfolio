import React, { forwardRef } from 'react';
import './projects.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from './Card.jsx'
import { PROJECTS } from '../../utils/constants';
import { useTranslation } from 'react-i18next';

const Projects = forwardRef((_, ref) => {
  const [t, i18n] = useTranslation('global')
  return (
    <Container ref={ref} fluid className="projects">
      <Row className='d-flex justify-content-center'>
        <h1 className='projects-h1 text-center text-white mt-5'>{t('projects.title')}</h1>
        <hr className='projects-hr' />
      </Row>
      <Row>
        {
          Object.keys(PROJECTS).map(project => (
            <Col key={PROJECTS[project].image} className='d-flex flex-row'>
              <Card image={PROJECTS[project].image} demo={PROJECTS[project].demo} repo={PROJECTS[project].repo} />
            </Col>
          ))
        }
      </Row>
    </Container>

  );
});

export default Projects;