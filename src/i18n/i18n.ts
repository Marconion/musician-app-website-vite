import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        services: "Services",
        solutions: "Solutions",
        process: "Process",
        portfolio: "Portfolio",
        contact: "Contact Us",
      },
      // Hero Section
      hero: {
        badge: "Innovative Software Solutions",
        title: "Transform Your Ideas Into Digital Reality",
        subtitle:
          "Softivity delivers cutting-edge software and mobile application solutions that drive business growth and enhance user experiences.",
        cta: "Start Your Project",
        learnMore: "View Our Work",
      },
      // Services Section
      services: {
        title: "Our Services",
        subtitle:
          "Comprehensive software solutions tailored to your business needs",
        webDev: {
          title: "Web Development",
          description:
            "Responsive, scalable web applications built with modern frameworks and best practices.",
        },
        mobileDev: {
          title: "Mobile App Development",
          description:
            "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
        },
        cloudSolutions: {
          title: "Cloud Solutions",
          description:
            "Cloud infrastructure setup, migration, and optimization for improved scalability and performance.",
        },
        dataAnalytics: {
          title: "Data Analytics",
          description:
            "Transform your data into actionable insights with advanced analytics solutions.",
        },
        cybersecurity: {
          title: "Security & Testing",
          description:
            "Comprehensive security audits and quality assurance to ensure your applications are secure and reliable.",
        },
        consulting: {
          title: "Consulting & Strategy",
          description:
            "Expert guidance on technology strategy, digital transformation, and architecture planning.",
        },
      },
      // Solutions Section
      solutions: {
        title: "Industry Solutions",
        subtitle: "Specialized expertise across diverse industries",
        healthcare: {
          title: "Healthcare",
          description: "HIPAA-compliant medical software",
        },
        finance: {
          title: "FinTech",
          description: "Secure financial applications",
        },
        ecommerce: {
          title: "E-Commerce",
          description: "Modern online shopping platforms",
        },
        education: {
          title: "Education",
          description: "Interactive learning platforms",
        },
      },
      // Process Section
      process: {
        title: "Our Process",
        subtitle: "A proven methodology that delivers results",
        steps: {
          discovery: {
            title: "Discovery & Planning",
            description:
              "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
            points: [
              "Requirements Analysis",
              "Market Research",
              "Project Roadmap",
              "Technology Selection",
            ],
          },
          design: {
            title: "Design & Prototyping",
            description:
              "Our design team creates intuitive user interfaces and interactive prototypes to visualize your solution.",
            points: [
              "UX/UI Design",
              "Wireframing",
              "Interactive Prototypes",
              "User Testing",
            ],
          },
          development: {
            title: "Development & Testing",
            description:
              "Expert developers build your solution using agile methodology with regular updates and quality assurance.",
            points: [
              "Agile Development",
              "Code Reviews",
              "Automated Testing",
              "Performance Optimization",
            ],
          },
          launch: {
            title: "Launch & Support",
            description:
              "We deploy your solution and provide ongoing maintenance, updates, and technical support.",
            points: [
              "Deployment",
              "Training",
              "Monitoring",
              "Continuous Improvement",
            ],
          },
        },
      },
      // Portfolio Section
      portfolio: {
        title: "Featured Projects",
        subtitle: "Successful solutions we've delivered for our clients",
        viewProject: "View Project",
        projects: {
          musicianApp: {
            title: "Musician's App",
            category: "Event planning for musicians",
            description:
              "A platform that helps musicians organize their events. Musician's App is a comprehensive mobile application designed to help musicians organize performances and events. Whether you're a solo artist or part of a band, our app enables you to manage your time efficiently and avoid administrative hassles.",
          },
        },
        project1: {
          title: "E-commerce Platform",
          description:
            "A modern e-commerce solution with advanced inventory management and analytics.",
        },
        project2: {
          title: "Healthcare Management System",
          description:
            "Comprehensive patient management system for a large healthcare network.",
        },
        project3: {
          title: "Financial Dashboard",
          description:
            "Real-time financial analytics dashboard for investment management.",
        },
      },
      // Contact Section
      contact: {
        title: "Let's Build Something Amazing",
        subtitle: "Ready to start your project? Get in touch with our team",
        form: {
          name: "Your Name",
          email: "Email Address",
          company: "Company Name",
          message: "Message",
          submit: "Send Message",
          successMessage:
            "Thank you for your message! We will get back to you soon.",
        },
        info: {
          email: "Email Us",
          phone: "Call Us",
          address: "Visit Us",
        },
      },
      // Footer
      footer: {
        description:
          "Transforming ideas into exceptional software and mobile solutions. We build digital products that drive business growth and deliver outstanding user experiences.",
        quickLinks: "Company",
        services: "Services",
        connect: "Connect With Us",
        rights: "All rights reserved.",
      },
    },
  },
  sr: {
    translation: {
      // Navigation
      nav: {
        services: "Usluge",
        solutions: "Rešenja",
        process: "Proces",
        portfolio: "Portfolio",
        contact: "Kontakt",
      },
      // Hero Section
      hero: {
        badge: "Inovativna Softverska Rešenja",
        title: "Transformišite Vaše Ideje u Digitalnu Stvarnost",
        subtitle:
          "Softivity pruža najsavremenija softverska i mobilna aplikativna rešenja koja podstiču rast biznisa i poboljšavaju korisničko iskustvo.",
        cta: "Pokrenite Vaš Projekat",
        learnMore: "Pogledajte Naš Rad",
      },
      // Services Section
      services: {
        title: "Naše Usluge",
        subtitle:
          "Sveobuhvatna softverska rešenja prilagođena potrebama vašeg biznisa",
        webDev: {
          title: "Web Razvoj",
          description:
            "Responzivne, skalabilne web aplikacije izgrađene sa modernim okvirima i najboljim praksama.",
        },
        mobileDev: {
          title: "Razvoj Mobilnih Aplikacija",
          description:
            "Nativne i cross-platform mobilne aplikacije za iOS i Android koje pružaju izuzetno korisničko iskustvo.",
        },
        cloudSolutions: {
          title: "Cloud Rešenja",
          description:
            "Podešavanje cloud infrastrukture, migracija i optimizacija za poboljšanu skalabilnost i performanse.",
        },
        dataAnalytics: {
          title: "Analiza Podataka",
          description:
            "Transformišite vaše podatke u korisne uvide sa naprednim analitičkim rešenjima.",
        },
        cybersecurity: {
          title: "Bezbednost i Testiranje",
          description:
            "Sveobuhvatni bezbednosni auditi i kontrola kvaliteta kako bi vaše aplikacije bile bezbedne i pouzdane.",
        },
        consulting: {
          title: "Konsalting i Strategija",
          description:
            "Stručno vođenje u tehnološkoj strategiji, digitalnoj transformaciji i planiranju arhitekture.",
        },
      },
      // Solutions Section
      solutions: {
        title: "Industrijska Rešenja",
        subtitle: "Specijalizovana ekspertiza kroz različite industrije",
        healthcare: {
          title: "Zdravstvo",
          description: "HIPAA-kompatibilan medicinski softver",
        },
        finance: {
          title: "FinTech",
          description: "Bezbedne finansijske aplikacije",
        },
        ecommerce: {
          title: "E-Trgovina",
          description: "Moderne online shopping platforme",
        },
        education: {
          title: "Obrazovanje",
          description: "Interaktivne platforme za učenje",
        },
      },
      // Process Section
      process: {
        title: "Naš Proces",
        subtitle: "Proverena metodologija koja donosi rezultate",
        steps: {
          discovery: {
            title: "Otkrivanje i Planiranje",
            description:
              "Počinjemo razumevanjem vaših poslovnih ciljeva, ciljne grupe i zahteva projekta kroz detaljne konsultacije.",
            points: [
              "Analiza Zahteva",
              "Istraživanje Tržišta",
              "Putanja Projekta",
              "Izbor Tehnologije",
            ],
          },
          design: {
            title: "Dizajn i Prototip",
            description:
              "Naš dizajnerski tim kreira intuitivne korisničke interfejse i interaktivne prototipove za vizualizaciju vašeg rešenja.",
            points: [
              "UX/UI Dizajn",
              "Wireframing",
              "Interaktivni Prototipovi",
              "Testiranje Korisnika",
            ],
          },
          development: {
            title: "Razvoj i Testiranje",
            description:
              "Stručni programeri grade vaše rešenje koristeći agilnu metodologiju sa redovnim ažuriranjima i kontrolom kvaliteta.",
            points: [
              "Agilan Razvoj",
              "Pregled Koda",
              "Automatsko Testiranje",
              "Optimizacija Performansi",
            ],
          },
          launch: {
            title: "Lansiranje i Podrška",
            description:
              "Implementiramo vaše rešenje i pružamo kontinuirano održavanje, ažuriranja i tehničku podršku.",
            points: [
              "Implementacija",
              "Obuka",
              "Monitoring",
              "Kontinuirano Poboljšanje",
            ],
          },
        },
      },
      // Portfolio Section
      portfolio: {
        title: "Istaknuti Projekti",
        subtitle: "Uspešna rešenja koja smo isporučili našim klijentima",
        viewProject: "Pogledaj Projekat",
        projects: {
          musicianApp: {
            title: "Aplikacija za Muzičare",
            category: "Planiranje događaja za muzičare",
            description:
              "Musician's App je sveobuhvatna mobilna aplikacija dizajnirana da pomogne muzičarima u organizaciji nastupa i događaja. Bilo da ste solo umetnik ili deo benda, naša aplikacija vam omogućava da efikasno upravljate svojim vremenom i izbegnete administrativne komplikacije.",
          },
        },
        project1: {
          title: "E-commerce Platforma",
          description:
            "Moderna e-commerce rešenja sa naprednim upravljanjem inventara i analitikom.",
        },
        project2: {
          title: "Sistem za Upravljanje Zdravstvom",
          description:
            "Sveobuhvatan sistem za upravljanje pacijentima za veliku zdravstvenu mrežu.",
        },
        project3: {
          title: "Finansijski Dashboard",
          description:
            "Dashboard za finansijsku analitiku u realnom vremenu za upravljanje investicijama.",
        },
      },
      // Contact Section
      contact: {
        title: "Hajde da Izgradimo Nešto Neverovatno",
        subtitle:
          "Spremni ste da pokrenete projekat? Stupite u kontakt sa našim timom",
        form: {
          name: "Vaše Ime",
          email: "Email Adresa",
          company: "Naziv Kompanije",
          message: "Poruka",
          submit: "Pošalji Poruku",
          successMessage: "Hvala vam na poruci! Odgovoriće vam uskoro.",
        },
        info: {
          email: "Pošaljite Email",
          phone: "Pozovite Nas",
          address: "Posetite Nas",
        },
      },
      // Footer
      footer: {
        description:
          "Transformišemo ideje u izuzetna softverska i mobilna rešenja. Gradimo digitalne proizvode koji podstiču rast biznisa i pružaju izvanredno korisničko iskustvo.",
        quickLinks: "Kompanija",
        services: "Usluge",
        connect: "Povežite se sa Nama",
        rights: "Sva prava zadržana.",
      },
    },
  },
};

// Initialize i18next
i18n.use(initReactI18next).init({
  resources,
  lng: "sr", // default language
  fallbackLng: "sr", // fallback language if translation is missing

  interpolation: {
    escapeValue: false, // React already escapes by default
  },

  // Optional: save language preference in localStorage
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

export default i18n;
