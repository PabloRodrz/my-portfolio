import { forwardRef } from "react"
import './about.css'
import { Button, Col, Container, Row, Image } from "react-bootstrap"
import argFlag from '../../assets/ar.svg'
import profilePic from '../../assets/foto-cv.jpg'
import { useTranslation } from "react-i18next"
const About = forwardRef(({ isDesktop }, ref) => {
  const [t, i18n] = useTranslation("global")
  const currentLanguage = i18n.language;
  return (
    <Container fluid className="about d-flex flex-column gap-4" ref={ref}>
      {isDesktop > 992 ?
        <>
          <Row>
            <Col className="mt-2 d-flex justify-content-center align-items-center flex-column text-center" xs={12}>
              <span className="about-span-intro">{t('about.introduction')}</span>
              <h1 className='about-h1 text-white'>{t('about.aboutMe')}  <hr className="about-hr" /></h1>
            </Col>
          </Row>
          <Row className="gap-5">
            <Col className="d-flex align-items-center justify-content-end" xs={4}>
              <Image className="p-2 about-img" src={profilePic} alt="my-picture" />
            </Col>
            <Col className="d-flex flex-column justify-content-start" xs={6} offset={2}>
              <span className="about-span-desc"> {t('about.niceToMeetYou')} </span>
              <p className="text-white mt-3 text-justify about-me">{t('about.description')}</p>
              <hr className="about-second-hr" />
              <Row>
                <Col className="d-flex flex-column gap-3">
                  <span className="text-white">{t('about.name')}</span>
                  <span className="text-white">{t('about.location')} <Image className="about-flag" src={argFlag} /></span>
                </Col>
                <Col className="d-flex flex-column align-items-end gap-3">
                  <span className="text-white">Email: pablorodz9@hotmail.com</span>
                  <span className={`text-white ${currentLanguage === 'es' ? 'availability-span-es' : 'availability-span'}`}>{t('about.availability')}</span>
                </Col>
              </Row>
              <Row xs={5} md={11} className="mt-4">
                <Col xs={5} md={11} className='d-flex justify-content-center'>
                  <Button className="about-btn rounded-3">
                    <a
                      rel="noopener noreferrer"
                      className="text-white"
                      target="blank"
                      href="https://drive.google.com/file/d/1U-3XHdXdx8ZA72aEMfad5ULUsIi8IJBF/view?usp=drive_link">
                      {t('about.viewResume')}
                    </a>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </> :
        <Row>
          <Col xs={12} className="d-flex flex-column justify-content-center align-items-center">
            <span className="about-span-intro"> {t('about.introduction')}</span>
            <h1 className='about-h1 text-white'>{t('about.aboutMe')}  <hr className="about-hr" /></h1>
            <Image className="p-2 about-img-mobile rounded-5" src={profilePic} alt="my-picture" />
            <span className="about-span-desc mt-2"> {t('about.niceToMeetYou')} </span>
            <p className="text-white mt-3 text-justify about-me w-75">{t('about.description')}</p>
            <Col className="about-second-col d-flex flex-column gap-2 w-75">
              <hr className="about-second-hr w-100" />
              <span className="text-white">{t('about.name')}</span>
              <span className="text-white">{t('about.location')}  <Image className="about-flag" src={argFlag} /></span>
              <span className="text-white">Email: pablorodz9@hotmail.com</span>
              <span className={`text-white ${currentLanguage === 'es' ? 'availability-span-es' : 'availability-span'}`} >{t('about.availability')}</span>
              <Button className="about-btn rounded-3">
                <a
                  rel="noopener noreferrer"
                  className="text-white"
                  target="blank"
                  href={`${currentLanguage === 'es' ? 'https://drive.google.com/file/d/1xjfKFRd1rrR31J72i8Z-Z33WHsvERNqm/view' : 'https://drive.google.com/file/d/1U-3XHdXdx8ZA72aEMfad5ULUsIi8IJBF/view?usp=drive_link'}`}>
                  {t('about.viewResume')}
                </a>
              </Button>
            </Col>
          </Col>
        </Row>
      }
    </Container >
  )
})

export default About