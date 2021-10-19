import Hero from './components/HeroSection/Hero';
import Fade from 'react-reveal/Fade';
import NavBar from './components/Navbar/NavBar';
import Container from 'react-bootstrap/Container';
import About from './components/About/About';
import './App.css';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import MyFooter from './components/Footer/MyFooter';

function App() {
  return (
    <>
      <Hero />
      <NavBar />
      <Container className='container-box'>
        <Fade top duration={1000}>
          <About />
        </Fade>
      </Container>
      <Container className='container-box'>
        <Fade top duration={1000}>
          <hr />
          <Skills />
        </Fade>
      </Container>
      <Container className='container-box'>
        <Fade top duration={1000}>
          <hr />
          <Projects />
        </Fade>
      </Container>
      <Container className='container-box'>
        <Fade top duration={1000}>
          <hr />
          <Contact />
        </Fade>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
