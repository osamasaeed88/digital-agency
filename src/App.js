import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from "./components/UI/Hero.jsx";
import Counter from "./components/UI/Counter.jsx";
import Services from "./components/UI/Services.jsx";
import About from "./components/UI/About.jsx";
import Team from "./components/UI/Team.jsx";
import Blog from "./components/UI/Blog.jsx";
import Testimonial from "./components/UI/Testimonial.jsx";
import Newsletter from './components/UI/Newsletter';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('')

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
