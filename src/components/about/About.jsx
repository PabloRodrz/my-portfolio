import { forwardRef } from "react"
import './about.css'
import { Button, Col, Container, Row } from "react-bootstrap"
const About = forwardRef((_, ref) => {
  return (
    <Container fluid className="about d-flex flex-column gap-4" ref={ref}>
      <Row>
        <Col className="mt-2 d-flex justify-content-center align-items-center flex-column text-center" xs={12}>
          <span className="about-span-intro">Let me introduce myself</span>
          <h1 className='about-h1 text-white'>About me  <hr className="about-hr" /></h1>
        </Col>
      </Row>
      <Row className="gap-5">
        <Col className="d-flex align-items-center justify-content-end" xs={4}>
          <img className="p-2 about-img" src="src\assets\foto_cv.jpg" alt="my-picture" />
        </Col>
        <Col className="d-flex flex-column justify-content-start" xs={6} offset={2}>
          <span className="about-span-desc"> Nice to meet you </span>
          <p className="text-white mt-3 text-justify about-me">I'm a 23 years old frontend developer very passionate and eager to learn.<br />
            My goal is to learn as much as I can to become my better version as a developer.<br />
            I'm a proactive and empathetic person. Also a team player with great communication and
            listening skills. <br />
            I feel motivated to learn, grow and develop my career in this fascinating
            area with a group of people full of empathy, good communication and synergy.
          </p>
          <hr className="about-second-hr" />
          <Row>
            <Col className="d-flex flex-column gap-3">
              <span className="text-white">Name: Pablo Rodriguez</span>
              <span className="text-white">Location: Argentina 🇦🇷</span>
            </Col>
            <Col className="d-flex flex-column align-items-end gap-3">
              <span className="text-white">Email: pablorodz9@hotmail.com</span>
              <span className="text-white availabilty-span">Availability: Open to work</span>
            </Col>
          </Row>
          <Row xs={5} md={11} className="mt-4">
            <Col xs={5} md={11} className='d-flex justify-content-center'>
              <Button className="about-btn rounded-3">
                <a
                  className="text-white"
                  target="blank"
                  href="https://drive.google.com/file/d/1U-3XHdXdx8ZA72aEMfad5ULUsIi8IJBF/view?usp=drive_link">
                  View resume
                </a>
              </Button>
            </Col>
          </Row>
        </Col>

      </Row>
    </Container >
  )
})

export default About