import NavigationBar from './components/navigationBar/NavigationBar'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import { useRef } from 'react'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
const App = () => {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null)
  return (
    <>
      <NavigationBar
        skillsRef={skillsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        projectsRef={projectsRef} />
      <Home />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  )
}


export default App
