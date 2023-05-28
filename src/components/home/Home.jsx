import { Typewriter } from "react-simple-typewriter"
import { Container, Row, Col, Button } from "react-bootstrap"
import linkedinLogo from '../../assets/linkedin.svg'
import githubLogo from '../../assets/github.svg'
import './home.css'
const Home = ({ isDesktop }) => {
  return (
    <Container fluid className="home">
      <Row>
        <Col className="firstCol d-flex flex-column align-items-center justify-content-center" xs={12} >
          <span style={{ color: 'white', fontSize: '4rem', fontWeight: '700' }}>
            Pablo Rodriguez
          </span>
          <span style={{ color: '#720e9e', fontSize: '2.5rem', marginTop: '-0.5rem' }}>
            <Typewriter
              words={[`Frontend Developer`]}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={90}
              deleteSpeed={80}
              delaySpeed={2500}
            /></span>
        </Col>
      </Row>
      <Row>
        <Col className={`home-icons-col d-flex ${isDesktop > 992 ? 'flex-column' : ''} gap-3 mx-5`} xs={2}>
          <Button href="https://www.linkedin.com/in/pablo-rodriguez-dev-it/" target="blank" className='image d-flex justify-content-center' style={{ width: '16px' }} variant='transparent'>
            <img style={{ height: '1.4rem' }} src={linkedinLogo} alt="LinkedIn logo" />
          </Button>
          <Button href="https://github.com/PabloRodrz" target="blank" className='image d-flex justify-content-center' style={{ width: '16px' }} variant='transparent'>
            <img className="" style={{ height: '1.58rem', color: 'white' }} src={githubLogo} alt="Github logo" />
          </Button>
        </Col>
      </Row>

    </Container>
  )
}

export default Home
