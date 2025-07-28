import React from "react";
import "./App.css";
import "./MusicianApp.css";
import musicians_app_img from "./assets/images/logo inline.png";
import app_store_img from "./assets/images/App-Store.png";
import google_play_img from "./assets/images/Google-Play.png";

function MusicianApp({ onBackToHome }) {
  return (
    <div className="app musician-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            {/* <h2>Musician's App</h2> */}
            <img
              src={musicians_app_img}
              alt="Musician's App Logo"
              // className="nav-logo-img"
            />
          </div>
          <div className="nav-menu">
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                onBackToHome();
              }}>
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <img
              src={musicians_app_img}
              alt="Musician's App Logo"
              className="w-100 mx-auto mb-8"
            />
            {/* <h1>Musician's App</h1> */}
            <p>Your ultimate companion for musicians gig management.</p>
            <p>Organize gigs with ease and efficiency.</p>

            <div className="app-download-section">
              <h3>Download Now</h3>
              <div className="download-buttons">
                <img
                  src={app_store_img}
                  alt="Download on App Store"
                  className="fill-white download-btn"
                />
                <img
                  src={google_play_img}
                  alt="Get it on Google Play"
                  className="fill-white download-btn"
                />
              </div>
            </div>
            <p href="/" className="privacy-policy">
              * Privacy Policy
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="section features-section">
          <div className="container">
            <h2>Features</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Add Associates</h3>
                <p>
                  If you have a lot of associates or band members, easily invite
                  them to your group of associates. App works by the principle
                  of closed groups, ensuring that only invited members can
                  access your events and information.
                </p>
              </div>
              <div className="service-card">
                <h3>Event Creation</h3>
                <p>
                  Create and manage events for your music gigs effortlessly.
                  Create events by entering all necessary details and roles that
                  you need for that specific event. You can send invites to all
                  your associates on those positions and they can join the event
                  with a single click. Or, you can invite them by hierarchy that
                  you can set up in the app.
                </p>
              </div>
              <div className="service-card">
                <h3>Communication</h3>
                <p>
                  Seamless communication via end-to-end encrypted chat and
                  notifications to keep everyone informed about event details.
                </p>
              </div>
              <div className="service-card">
                <h3>Event Tracking</h3>
                <p>
                  Always know the status of your events, who you work with, what
                  needs to be done and location of the event.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section about">
          <div className="container ">
            <h2>About Musician's App</h2>
            <p>
              Musician's App is a comprehensive mobile application designed to
              help musicians organizing their gigs and events. Whether you're a
              solo artist or part of a band, our app provides the tools you need
              to streamline your workflow and not to waste time on
              administrative tasks.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section support-section">
          <div className="container">
            <h2>Support & Feedback</h2>
            <p>Have questions or suggestions? We'd love to hear from you!</p>
            <div className="contact-info">
              <div className="contact-item">
                <h4>Email</h4>
                <p>support@musiciansapp.com</p>
              </div>
              <div className="contact-item ">
                <h4>App Store Reviews</h4>
                <p>Leave us a review on the App Store or Google Play</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Musician's App</h3>
            <p>Your companion for musical excellence.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Musician's App by Softivity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MusicianApp;
