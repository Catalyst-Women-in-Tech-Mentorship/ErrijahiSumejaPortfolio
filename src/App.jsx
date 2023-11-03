import "./style.css";
import Navbar from './components/navbar/navbar.jsx';
import Test from './test.jsx';



const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
    </section>
    <section id="Servies">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
