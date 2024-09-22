import "./app.scss"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/services/Service";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="Courses">
        <Service />
      </section>

      {/* <section id="About Us"> */}
        <About />
      {/* </section> */}

      <section id="Contact Us">
        <Contact />
      </section>

      
    </div>
  );
};

export default App;
