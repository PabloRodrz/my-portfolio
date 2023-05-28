import { forwardRef } from 'react';
import './skills.css';
import { Container, Row, Col, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import htmlLogo from '../../assets/html.svg'
import cssLogo from '../../assets/css.svg'
import jsLogo from '../../assets/js.png'
import tsLogo from '../../assets/typescript.svg'
import reactLogo from '../../assets/React-icon.svg.png'
import reduxLogo from '../../assets/redux.svg'
import routerLogo from '../../assets/react-router.png'
import bootstrapLogo from '../../assets/bootstrap.png'
import reactBstLogo from '../../assets/react-bootstrap.png'
import gitLogo from '../../assets/git-icon.svg'
import githubLogo from '../../assets/github.svg'
import sqLiteLogo from '../../assets/sqlite.png'
import axiosLogo from '../../assets/axios.png'

const Skills = forwardRef((_, ref) => {
  const LOGOS_WITH_NAMES_FIRST_ROW = {
    HTML: {
      logo: htmlLogo,
      name: 'HTML5',
    },
    CSS: {
      logo: cssLogo,
      name: 'CSS3',
    },
    JavaScript: {
      logo: jsLogo,
      name: 'JavaScript',
    },
    TypeScript: {
      logo: tsLogo,
      name: 'TypeScript',
    },
    React: {
      logo: reactLogo,
      name: 'React',
    },
    Redux: {
      logo: reduxLogo,
      name: 'Redux',
    },
    'React Router': {
      logo: routerLogo,
      name: 'React Router',
    }
  };
  const LOGOS_WITH_NAMES_SECOND_ROW = {
    Bootstrap: {
      logo: bootstrapLogo,
      name: 'Bootstrap',
    },
    'React Bootstrap': {
      logo: reactBstLogo,
      name: 'React Bootstrap',
    },
    Git: {
      logo: gitLogo,
      name: 'Git',
    },
    GitHub: {
      logo: githubLogo,
      name: 'GitHub',
    },
    SQLite: {
      logo: sqLiteLogo,
      name: 'SQLite',
    },
    Axios: {
      logo: axiosLogo,
      name: 'Axios',
    },
  }
  const renderTooltip = (name) => (
    <Tooltip>
      {name}
    </Tooltip >
  );
  return (
    <Container fluid ref={ref} className='skills d-flex flex-column gap-5'>
      <Row className='d-flex justify-content-center'>
        <h1 style={{ fontWeight: '700' }} className='text-white text-center'>Skills</h1>
        <hr className='skills-hr' />
      </Row>
      <Container fluid className='d-flex flex-column align-items-center justify-content-center mt-5 gap-5'>
        <Row className='d-flex flex-column '>
          <Col className='d-flex flex-row align-content-center justify-content-center gap-5'>
            {Object.keys(LOGOS_WITH_NAMES_FIRST_ROW).map((item) => (
              <OverlayTrigger
                key={item}
                placement="top"
                delay={{ show: 400, hide: 20 }}
                overlay={renderTooltip(LOGOS_WITH_NAMES_FIRST_ROW[item].name)}
              >
                <Image
                  className='logos'
                  src={LOGOS_WITH_NAMES_FIRST_ROW[item].logo}
                  alt={`${LOGOS_WITH_NAMES_FIRST_ROW[item].name} logo`}
                />
              </OverlayTrigger>
            ))}
          </Col>
        </Row>
        <Row>
          <Col className='d-flex flex-row align-content-center justify-content-center gap-5'>
            <Col className='d-flex flex-row align-content-center justify-content-center gap-5'>
              {Object.keys(LOGOS_WITH_NAMES_SECOND_ROW).map((item) => (
                <OverlayTrigger
                  key={item}
                  placement="top"
                  delay={{ show: 400, hide: 20 }}
                  overlay={renderTooltip(LOGOS_WITH_NAMES_SECOND_ROW[item].name)}
                >

                  {LOGOS_WITH_NAMES_SECOND_ROW[item].name === 'Bootstrap' ?
                    <div className='white-bg'>
                      <Image
                        className='logos'
                        src={LOGOS_WITH_NAMES_SECOND_ROW[item].logo}
                        alt={`${LOGOS_WITH_NAMES_SECOND_ROW[item].name} logo`}
                      />
                    </div>
                    : <Image
                      className='logos'
                      src={LOGOS_WITH_NAMES_SECOND_ROW[item].logo}
                      alt={`${LOGOS_WITH_NAMES_SECOND_ROW[item].name} logo`}
                    />}
                </OverlayTrigger>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
    </Container >
  );
});

export default Skills;