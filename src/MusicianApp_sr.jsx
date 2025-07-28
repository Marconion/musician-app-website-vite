import React from "react";
import "./App.css";
import "./MusicianApp.css";
import musicians_app_img from "./assets/images/logo inline.png";
import app_store_img from "./assets/images/App-Store.png";
import google_play_img from "./assets/images/Google-Play.png";
import backdrop_img from "./assets/images/backdrop.jpg";

function MusicianApp({ onBackToHome }) {
  return (
    <div className="app musician-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={musicians_app_img} alt="Logo aplikacije Musician's App" />
          </div>
          <div className="nav-menu">
            <a
              href="#"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                onBackToHome();
              }}>
              Povratak na početnu
            </a>
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
            <img
              src={musicians_app_img}
              alt="Logo aplikacije Musician's App"
              className="w-100 mx-auto mb-8"
            />
            <p>Vaš ultimativni saputnik za upravljanje svirkama.</p>
            <p>Organizujte nastupe lako i efikasno.</p>

            <div className="app-download-section">
              <h3>Preuzmite odmah</h3>
              <div className="download-images-container">
                <img
                  src={app_store_img}
                  alt="App Store slika"
                  className="fill-white w-[200px] mx-auto mt-12"
                />
                <img
                  src={google_play_img}
                  alt="Google Play slika"
                  className="fill-white w-[200px] mx-auto my-4"
                />
              </div>
            </div>
            <a
              href="https://fortunate-fall-b9c.notion.site/Politika-privatnosti-Musician-s-App-2122430d46a5807b94aeed7074b5f573#2122430d46a580f0a1b7ea32a92e772f"
              className="privacy-policy">
              * Politika privatnosti
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="section about">
          <div className="container ">
            <ion-icon name="alert-circle-outline" className="icon"></ion-icon>
            <h2>O aplikaciji Musician's App</h2>
            <p>
              Musician's App je sveobuhvatna mobilna aplikacija dizajnirana da
              pomogne muzičarima u organizaciji nastupa i događaja. Bilo da ste
              solo umetnik ili deo benda, naša aplikacija vam omogućava da
              efikasno upravljate svojim vremenom i izbegnete administrativne
              komplikacije.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="section features-section">
          <div className="container">
            <ion-icon name="bar-chart-outline" className="icon"></ion-icon>
            <h2>Funkcionalnosti</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Dodavanje saradnika</h3>
                <p>
                  Ako imate mnogo saradnika ili članova benda, lako ih pozovite
                  u svoju grupu saradnika. Aplikacija funkcioniše po principu
                  zatvorenih grupa, što znači da samo pozvani članovi mogu da
                  pristupe vašim događajima i informacijama.
                </p>
              </div>
              <div className="service-card">
                <h3>Kreiranje događaja</h3>
                <p>
                  Kreirajte i upravljajte svirkama jednostavno. Unesite sve
                  neophodne informacije i pozicije koje su vam potrebne za taj
                  događaj. Pozovite sve saradnike za određene pozicije jednim
                  klikom. Takođe možete definisati hijerarhiju pozivanja.
                </p>
              </div>
              <div className="service-card">
                <h3>Komunikacija</h3>
                <p>
                  Neometana komunikacija putem end-to-end enkriptovanog četa i
                  notifikacija koje Vas drže informisanim u svakom trenutku.
                  <br />
                  <br />
                  Nema više traženja poruka u raznim aplikacijama (
                  <i>WhatsApp, Viber, Messenger, SMS itd.</i>). Sve informacije
                  vezane za Vaš posao su na jednom mestu.
                </p>
              </div>
              <div className="service-card">
                <h3>Praćenje događaja</h3>
                <p>
                  Uvek znajte status vaših događaja, sa kim radite, šta još
                  treba da se uradi i gde se događaj održava.
                  <br />
                  <br />U slučaju nekih promena, lako promenite sve informacije
                  vezane za događaj.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section support-section">
          <div className="container">
            <ion-icon
              name="information-circle-outline"
              className="icon"></ion-icon>
            <h2>Podrška i povratne informacije</h2>
            <p>Imate pitanja ili predloge? Rado ćemo ih čuti!</p>
            <div className="contact-info">
              <div className="contact-item">
                <h4>Email</h4>
                <p>support@softivity.net</p>
              </div>
              <div className="contact-item ">
                <h4>Recenzije u prodavnici</h4>
                <p>Ostavite nam recenziju na App Store-u ili Google Play-u</p>
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
                <a href="/">Početna</a>
              </li>
              <li>
                <a href="#features">Funkcionalnosti</a>
              </li>
              <li>
                <a href="#about">O aplikaciji</a>
              </li>
              <li>
                <a href="#contact">Podrška</a>
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

export default MusicianApp;
