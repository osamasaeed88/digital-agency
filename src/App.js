import React, { useState, useEffect } from 'react';
import DotLoader from "react-spinners/DotLoader";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, []);
  const [theme, setTheme] = useState('')

  const toggleTheme = () => {
    theme === '' ? setTheme('light-theme') : setTheme('')
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme]);

  return (
    <div>
      {
        loading ?
          <DotLoader color="#379cf6" cssOverride={{
            margin: '0 auto',
            marginTop: '20%'
          }} size={80}
          />
          // <Rings height="80" width="80" color="#4fa94d" radius="6" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel="rings-loading" />
          :
          <div>
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
          </div>
      }
    </div>
  );
};

export default App;
