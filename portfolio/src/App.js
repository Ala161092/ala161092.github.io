import React from "react";
import AOS from 'aos'
import Header from './components/Header';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';


function App() {
  AOS.init({
    once: true,
    useClassNames: true
  })
  
  return (
    <div className="App">
      <Nav />
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
