import "./style.css";
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
import Parallax from './components/parallax/parallax.jsx';
import Portfolio from "./components/portfolio/portfolio.jsx";
import Contact from './components/contact/contact.jsx';



const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
    </section>

    <section id="Portfolio">
      <Parallax type="services"/>
    </section>

    <Portfolio/>
    
    <section id="Contact">
      <Contact/>
    </section>

  </div>
  );
};

export default App;
