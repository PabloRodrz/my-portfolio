import { Button, Col, Container, Image, Row } from "react-bootstrap"
import './card.css'
import display from '../../../public/static/assets/display.svg'
import githubLogo from '../../../public/static/assets/github.svg'
import { useState } from "react"


export const Card = ({ image, demo, repo }) => {
  const [isShown, setIsShown] = useState(false)
  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };
  return (
    <Container fluid style={{ width: '15rem', height: '15rem' }}>
      <Row>
        <Col className="col d-flex gap-3" style={{ position: 'relative' }}>
          <div style={{ width: '16rem' }}
            onMouseOver={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            className='card-container'>
            <Image
              className="card-image"
              src={image} />
            <Button
              href={demo}
              rel="noopener noreferrer"
              target="_blank"
              className={`${isShown ? '' : 'd-none'} card-buttons d-flex justify-content-center`} variant='transparent'>
              <Image
                style={{ height: '2rem', marginRight: '4rem' }}
                src={display}
                alt="LinkedIn logo"
                className="card-icons"
              />
            </Button>
            <Button
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${isShown ? '' : 'd-none'} card-buttons d-flex justify-content-center`} variant='transparent'>
              <Image
                style={{ height: '2rem', marginLeft: '4rem' }}
                src={githubLogo}
                alt="Github logo"
                className="card-icons"
              />
            </Button>
          </div>
        </Col>
      </Row>
    </Container >
  )
}
