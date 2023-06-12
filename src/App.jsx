import NavigationBar from './components/navigationBar/NavigationBar'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import { useRef, useState, useEffect } from 'react'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
const App = () => {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth])
  return (
    <>
      <NavigationBar
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        projectsRef={projectsRef}
        isDesktop={isDesktop} />
      <Home isDesktop={isDesktop} />
      <About ref={aboutRef} isDesktop={isDesktop} />
      <Skills ref={skillsRef} isDesktop={isDesktop} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} isDesktop={isDesktop} />
    </>
  )
}


export default App
