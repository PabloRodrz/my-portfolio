import './skills.css';
import { LOGOS_WITH_NAMES_FIRST_ROW, LOGOS_WITH_NAMES_SECOND_ROW } from '../../utils/constants';
import { forwardRef } from 'react';
import { Container, Row, Col, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Skills = forwardRef(({ isDesktop }, ref) => {
  const renderTooltip = name => <Tooltip>{name}</Tooltip >
  const [t, i18n] = useTranslation("global")
  const currentLanguage = i18n.language;
  return (
    <Container fluid ref={ref} className='skills d-flex flex-column gap-1'>
      <Row className={`d-flex justify-content-center ${isDesktop < 992 ? 'mt-5' : 'mt-2'}`}>
        <h1 style={{ fontWeight: '700' }} className={`text-white text-center ${isDesktop < 992 ? 'mt-5' : 'mt-2'}`}>{t('skills.title')}</h1>
        <hr className={`${currentLanguage === 'es' ? 'es-hr' : 'skills-hr'}`} />
      </Row>
      <Container fluid className='d-flex flex-column align-items-center justify-content-center mt-5'>
        <Row className='d-flex'>
          {Object.keys(LOGOS_WITH_NAMES_FIRST_ROW).map((item) => (
            <Col key={LOGOS_WITH_NAMES_FIRST_ROW[item].name} className='d-flex align-items-center'>
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
            </Col>
          ))}
          {Object.keys(LOGOS_WITH_NAMES_SECOND_ROW).map((item) => (
            <Col key={LOGOS_WITH_NAMES_SECOND_ROW[item].name} className='d-flex align-items-center justify-content-center'>
              <OverlayTrigger
                key={item}
                placement="top"
                delay={{ show: 400, hide: 20 }}
                overlay={renderTooltip(LOGOS_WITH_NAMES_SECOND_ROW[item].name)}
              >
                <Image
                  className={`logos ${LOGOS_WITH_NAMES_SECOND_ROW[item].name === 'Bootstrap' && 'white-bg'}`}
                  src={LOGOS_WITH_NAMES_SECOND_ROW[item].logo}
                  alt={`${LOGOS_WITH_NAMES_SECOND_ROW[item].name} logo`}
                />
              </OverlayTrigger>
            </Col>
          ))}
        </Row>
      </Container>
    </Container >
  );
});

export default Skills;