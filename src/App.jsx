import { useState } from "react";
import "./App.css";
import app_store_img from "./assets/images/App-Store.png";
import google_play_img from "./assets/images/Google-Play.png";
import musicians_app_img from "./assets/images/logo inline.png";
import backdrop_img from "./assets/images/backdrop.jpg";
import backdrop1_img from "./assets/images/backdrop1.jpg";
import MusicianApp from "./MusicianApp_sr.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleMusicianAppClick = () => {
    // Force immediate scroll reset using multiple methods
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.pageYOffset = 0;
    // Use requestAnimationFrame to ensure it happens immediately
    requestAnimationFrame(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    setCurrentPage("musician-app");
  };

  const handleBackToHome = () => {
    // Force immediate scroll reset using multiple methods
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.pageYOffset = 0;
    // Use requestAnimationFrame to ensure it happens immediately
    requestAnimationFrame(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    setCurrentPage("home");
  };

  // If we're on the musician app page, render that component
  if (currentPage === "musician-app") {
    return <MusicianApp onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Softivity</h2>
          </div>

          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <a
              href="#home"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a
              href="#about"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a
              href="#services"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a
              href="#portfolio"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>

          <div
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section
          id="home"
          className="hero"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(223, 208, 184, 0.8) 0%, rgba(21, 52, 72, 0.9) 75%), url(${backdrop_img})`,
          }}>
          <div className="hero-content">
            <h1>Professional software solutions</h1>
            <p>We create software solutions tailored to your needs.</p>
            {/* <button className="cta-button">Get Started</button> */}
            {/* <div className="download-images-container">
              <img
                src={app_store_img}
                alt="App Store Img"
                className="fill-white w-[200px] mx-auto mt-12"
              />
              <img
                src={google_play_img}
                alt="Google Play Img"
                className="fill-white w-[200px] mx-auto my-4"
              />
            </div> */}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2>About Us</h2>
            <p>
              We are a company dedicated to bringing ease and innovation to your
              everyday life. We create software solutions that enhance your
              productivity and creativity, making technology work for you.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="section"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(255, 245, 224, 0.9) 0%, rgba(21, 52, 72, 0.8) 75%), url(${backdrop1_img})`,
          }}>
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Android and iOS Development</h3>
                <p>
                  Professional mobile app development for Android and iOS
                  platforms.
                </p>
              </div>
              <div className="service-card">
                <h3>Web Development</h3>
                <p>
                  Complete web development services from design to deployment.
                </p>
              </div>
              {/* <div className="service-card">
                <h3>Music Lessons</h3>
                <p>
                  Personalized music instruction for all skill levels and ages.
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section">
          <div className="container">
            <h2>Portfolio</h2>
            <p>Explore our recent projects.</p>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <img
                  src={musicians_app_img}
                  alt="Musician's App"
                  className="w-50 mx-auto cursor-pointer"
                  onClick={handleMusicianAppClick}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="portfolio-item"></div>
              <div className="portfolio-item"></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>
              Ready to make your everyday life easier? Get in touch with us
              today!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <h4>Email</h4>
                <p>info@softivity.rs</p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>+381 60 123 4567</p>
              </div>
              {/* <div className="contact-item">
                <h4>Location</h4>
                <p>Vase Pelagića 13, Belgrade, Serbia</p>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Softivity</h3>
            <p>Your place for innovative software solutions.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" aria-label="YouTube">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Softivity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
