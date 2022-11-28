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

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default App;
