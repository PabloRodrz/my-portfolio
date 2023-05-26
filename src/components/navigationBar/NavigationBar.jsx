import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './navigationbar.css'
const NavigationBar = ({ projectsRef, contactRef, aboutRef, skillsRef }) => {
  const scrollToComponent = (ref) => {
    const scrollOffset = 84;
    window.scrollTo({
      top: ref.current.offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Navbar sticky="top" expand="lg" variant="dark" className='bg py-3'>
      <Container fluid>
        <Navbar.Text style={{ fontWeight: '700' }} className='mx-5 h4 text-white'>My Portfolio</Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav text-white text-center">
          <Nav className="ms-auto gap-4 mx-5">
            <Nav.Link onClick={() => scrollToTop()} className='nav-links text-white'>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToComponent(aboutRef)} className='nav-links text-white'>About</Nav.Link>
            <Nav.Link onClick={() => scrollToComponent(skillsRef)} className='nav-links text-white'>Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToComponent(projectsRef)} className='nav-links text-white' >Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToComponent(contactRef)} className='nav-links text-white'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
