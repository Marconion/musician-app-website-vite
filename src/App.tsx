import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      {/* <Solutions /> */}
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
