import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useTranslation } from 'react-i18next'
import argFlag from '../../assets/ar.svg'
import usaFlag from '../../assets/us.svg'
import './navigationbar.css'
import { Image } from 'react-bootstrap'
const NavigationBar = ({ projectsRef, contactRef, aboutRef, skillsRef, isDesktop }) => {
  const [t, i18n] = useTranslation("global")
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
  const currentLanguage = i18n.language;
  const changeLanguage = () => {
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
  };
  return (
    <Navbar sticky="top" expand="lg" variant="dark" className='bg py-3'>
      <Container fluid>
        <Navbar.Text style={{ fontWeight: '700' }} className='mx-5 h4 text-white'>{t("navbar.myPortfolio")}</Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav text-white text-center">
          <Nav className={`ms-auto gap-4 ${isDesktop < 992 ? '' : 'mx-5'}`}>
            <Nav.Link onClick={() => scrollToTop()} className='nav-links text-white'>{t("navbar.home")}</Nav.Link>
            <Nav.Link onClick={() => scrollToComponent(aboutRef)} className='nav-links text-white'>{t('navbar.about')}</Nav.Link>
            <Nav.Link onClick={() => scrollToComponent(skillsRef)} className='nav-links text-white'>{t('navbar.skills')}</Nav.Link>
            <Nav.Link onClick={() => scrollToComponent(projectsRef)} className='nav-links text-white' >{t('navbar.projects')}</Nav.Link>
            <Nav.Link onClick={() => scrollToComponent(contactRef)} className='nav-links text-white'>{t('navbar.contact')}</Nav.Link>
            <Nav.Link onClick={() => changeLanguage('en')} className='nav-links text-white'>{currentLanguage === 'es' ? <Image src={usaFlag} style={{ height: '20px' }} /> : <Image src={argFlag} style={{ height: '20px' }} />}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
