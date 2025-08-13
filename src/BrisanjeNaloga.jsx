import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./MusicianApp.css";
import musicians_app_img from "./assets/images/logo inline.png";
import backdrop_img from "./assets/images/backdrop.jpg";

function BrisanjeNaloga() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <h1 className="deletion-title">Brisanje naloga</h1>
            <p className="deletion-subtitle">
              Informacije o brisanju korisničkog naloga iz Musician's App
              aplikacije.
            </p>

            <div className="content-section deletion-content">
              <div className="deletion-info-card">
                <h3 className="deletion-methods-title">
                  U svakom trenutku možete zatražiti brisanje svog naloga i svih
                  povezanih podataka. Postoje dva načina:
                </h3>

                <div className="deletion-method">
                  <p className="method-title">1. Unutar aplikacije</p>
                  <p className="method-description">
                    Otvorite aplikaciju, idite u meni Podešavanja i izaberite
                    opciju Obriši nalog. Nakon potvrde, svi vaši podaci će biti
                    trajno uklonjeni.
                  </p>
                </div>

                <div className="my-4">
                  <span>ili</span>
                </div>

                <div className="deletion-method">
                  <p className="method-title">2. Email za brisanje naloga</p>
                  <div className="contact-info-card">
                    <p className="contact-email">support@softivity.net</p>
                  </div>

                  <p className="method-description">
                    Molimo vas da u email-u navedete vaš username ili email
                    adresu povezanu sa nalogom koji želite da obrišete.
                  </p>
                </div>
              </div>
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
                <Link to="/politika-privatnosti">Politika privatnosti</Link>
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
