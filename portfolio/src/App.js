import './App.css';
import { Element } from 'react-scroll';
import NavigationBar from './sections/NavigationBar';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="app">
      <div>
        <div>
          <NavigationBar/>
        </div>
        <Element name="home">
          <Home/>
        </Element>
        <Element name="about">
          <About/>
        </Element>
        <Element name="experience">
          <Experience/>
        </Element>
        <Element name="skills">
          <Skills/>
        </Element>
        <Element name="projects">
          <Projects/>
        </Element>
        <Element name="contact">
          <Contact/>
        </Element>
      </div>
    </div>
  );
}

export default App;
