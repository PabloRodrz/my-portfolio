import { forwardRef } from "react"
import './contact.css'
import { Col, Container, Row, Button, Image, OverlayTrigger, Tooltip } from "react-bootstrap"
import linkedinLogo from '../../assets/linkedin.svg'
import emailLogo from '../../assets/email.svg'
const Contact = forwardRef(({ isDesktop }, ref) => {
  const renderTooltip = text => <Tooltip>{text}</Tooltip >
  return (
    <Container fluid className="contact d-flex flex-column gap-5" ref={ref}>
      <Row className="d-flex justify-content-center">
        <h1 className="contact-h1 mt-2 text-center text-white">Contact</h1>
        <hr className="contact-hr text-center" />
      </Row>
      <Row className="h-75">
        <Col className={`d-flex col-btns align-items-center justify-content-center ${isDesktop < 992 ? 'flex-column' : 'flex-row'} `}>
          <Button href="https://www.linkedin.com/in/pablo-rodriguez-dev-it/"
            rel="noopener noreferrer" target="blank"
            className='image linkedin-btn d-flex justify-content-center' variant='transparent'>
            <OverlayTrigger
              placement="top"
              delay={{ show: 400, hide: 20 }}
              overlay={renderTooltip('Click here to go to my LinkedIn')}
            >
              <Image className="contact-image" src={linkedinLogo} alt="LinkedIn logo" />
            </OverlayTrigger>
          </Button>
          <Button href="mailto:pablorodz9@hotmail.com" target="_blank" rel="noopener noreferrer"
            className='image email-btn d-flex justify-content-center' variant='transparent'>
            <OverlayTrigger
              placement="top"
              delay={{ show: 400, hide: 20 }}
              overlay={renderTooltip('Click here to send me an Email. pablorodz9@hotmail.com')}
            >
              <Image className="contact-image" src={emailLogo} alt="Github logo" />
            </OverlayTrigger>
          </Button>
        </Col>
      </Row>
    </Container >
  )
})

export default Contact