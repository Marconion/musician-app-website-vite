import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./MusicianApp.css";
import musicians_app_img from "./assets/images/logo inline.png";
import backdrop_img from "./assets/images/backdrop.jpg";

function BrisanjeNaloga() {
  return (
    <div className="app musician-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={musicians_app_img} alt="Logo aplikacije Musician's App" />
          </div>
          <div className="nav-menu">
            <Link to="/" className="nav-link">
              Povratak na početnu
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(223, 208, 184, 0.8) 0%, rgba(21, 52, 72, 0.9) 75%), url(${backdrop_img})`,
          }}>
          <div className="hero-content">
            <h1>Brisanje naloga</h1>
            <p>
              Informacije o brisanju korisničkog naloga iz Musician's App
              aplikacije.
            </p>

            <div className="content-section">
              <h3>
                U svakom trenutku možete zatražiti brisanje svog naloga i svih
                povezanih podataka. Postoje dva načina:
              </h3>
              <h1 className="mt-8">Unutar aplikacije</h1>
              <p>
                Otvorite aplikaciju, idite u meni Podešavanja i izaberite opciju
                Obriši nalog. Nakon potvrde, svi vaši podaci će biti trajno
                uklonjeni.
              </p>
              <p>ili</p>

              <div className="contact-info">
                <h1>Email za brisanje naloga:</h1>
                <p>support@softivity.net</p>
              </div>

              <p>
                Molimo vas da u email-u navedete vaš username ili email adresu
                povezanu sa nalogom koji želite da obrišete.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src={musicians_app_img}
              alt="Logo aplikacije Musician's App"
              className="w-50 mx-auto mb-4"
            />
            <p className="italic">
              "Fokusiraj se na muziku, ne na administraciju."
            </p>
          </div>
          <div className="footer-section">
            <h4>Brzi linkovi</h4>
            <ul>
              <li>
                <Link to="/">Početna</Link>
              </li>
              <li>
                <a href="https://fortunate-fall-b9c.notion.site/Politika-privatnosti-Musician-s-App-2122430d46a5807b94aeed7074b5f573#2122430d46a580f0a1b7ea32a92e772f">
                  Politika privatnosti
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Musician's App by Softivity. Sva prava zadržana.</p>
        </div>
      </footer>
    </div>
  );
}

export default BrisanjeNaloga;
