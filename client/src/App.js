// import logo from './logo.svg';
// import './App.css';

// import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/navbar";
import Skills from "./Components/Skills/Skills";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="vh-100 overflow-visible">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
