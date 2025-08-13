import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./MusicianApp.css";
import musicians_app_img from "./assets/images/logo inline.png";
import backdrop_img from "./assets/images/backdrop.jpg";

function PolitikaPrivatnosti() {
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
            <h1 className="deletion-title">Politika privatnosti</h1>
            <p className="deletion-subtitle">
              Musician's App - Politika privatnosti i zaštite podataka
            </p>

            <div className="content-section deletion-content">
              <div className="deletion-info-card">
                <div className="privacy-header">
                  <p className="privacy-updated">
                    <strong>Ažurirano:</strong> jun 2025.
                  </p>
                  <p className="privacy-intro">
                    Aplikacija <strong>Musician's App</strong>, u vlasništvu
                    kompanije <strong>Softivity</strong> (u daljem tekstu:
                    „mi"), poštuje vašu privatnost. Ova politika privatnosti
                    objašnjava kako prikupljamo, koristimo i čuvamo podatke
                    korisnika.
                  </p>
                </div>

                <div className="privacy-section">
                  <h3 className="privacy-section-title">
                    1. Podaci koje prikupljamo
                  </h3>

                  <div className="privacy-item">
                    <h4 className="privacy-item-title">
                      • Kamera i fotografije:
                    </h4>
                    <p className="privacy-item-description">
                      Pristup kameri i galeriji koristi se isključivo za
                      učitavanje profilne slike ili deljenje slika unutar
                      aplikacije. Fotografije se ne šalju na naš server bez vaše
                      dozvole.
                    </p>
                  </div>

                  <div className="privacy-item">
                    <h4 className="privacy-item-title">• Lokacija:</h4>
                    <p className="privacy-item-description">
                      Lokacija se koristi kako bi se prikazala vaša pozicija na
                      mapi (npr. za pronalaženje događaja ili mesta) i nije
                      deljena sa trećim stranama.
                    </p>
                  </div>

                  <div className="privacy-item">
                    <h4 className="privacy-item-title">• Obaveštenja:</h4>
                    <p className="privacy-item-description">
                      Koristimo obaveštenja za podsetnike u vezi sa događajima i
                      interakcijama u aplikaciji. Uvek možete isključiti
                      obaveštenja u podešavanjima uređaja.
                    </p>
                  </div>
                </div>

                <div className="privacy-section">
                  <h3 className="privacy-section-title">
                    2. Korišćenje podataka
                  </h3>
                  <p className="privacy-section-description">
                    Podaci koje prikupljamo koriste se isključivo za
                    funkcionalnosti aplikacije i poboljšanje korisničkog
                    iskustva. Ne delimo vaše podatke sa trećim licima.
                  </p>
                </div>

                <div className="privacy-section">
                  <h3 className="privacy-section-title">3. Bezbednost</h3>
                  <p className="privacy-section-description">
                    Koristimo tehničke mere zaštite kako bismo čuvali vaše
                    informacije. Neki podaci su enkriptovani (end-to-end) i ne
                    mogu biti pristupljeni od strane trećih lica.
                  </p>
                </div>

                <div className="privacy-section">
                  <h3 className="privacy-section-title">4. Prava korisnika</h3>
                  <p className="privacy-section-description">
                    Imate pravo da zatražite brisanje ili pristup ličnim
                    podacima. Za sve zahteve, kontaktirajte nas putem e-pošte.
                  </p>
                </div>

                <div className="privacy-section">
                  <h3 className="privacy-section-title">5. Kontakt</h3>
                  <p className="privacy-section-description">
                    Za sva pitanja u vezi sa privatnošću možete nas
                    kontaktirati:
                  </p>
                  <div className="contact-info-card">
                    <p className="contact-detail">
                      <strong>Ime firme:</strong> Softivity
                    </p>
                    <p className="contact-detail">
                      <strong>Email:</strong> support@softivity.net
                    </p>
                  </div>
                </div>

                <div className="privacy-footer">
                  <p className="privacy-agreement">
                    Korišćenjem ove aplikacije, saglasni ste sa ovom politikom
                    privatnosti.
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
                <Link to="/brisanje-naloga">Brisanje naloga</Link>
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

export default PolitikaPrivatnosti;
