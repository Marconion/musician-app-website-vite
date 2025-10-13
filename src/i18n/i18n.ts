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
        contact: "Contact",
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
      // Musician App Section
      musicianApp: {
        mobileAppLabel: "Mobile Application",
        title: "Musician App",
        subtitle:
          "A comprehensive mobile application designed for singers, musicians, and managers that facilitates performance organization and collaboration. Built for Android and iOS platforms.",
        keyFeatures: {
          title: "Key Features",
          subtitle:
            "Discover the powerful features that make this app perfect for musicians",
          addCollaborators: {
            title: "Adding Collaborators",
            description:
              "If you have many collaborators or band members, easily invite them to your collaboration group. The app works on the principle of closed groups, which means only members that you invited to your group of associates can access your events and information for those events.",
          },
          createEvents: {
            title: "Creating Events",
            description:
              "Create and manage gigs easily. Enter all necessary information and positions you need for that event. Invite all collaborators for specific positions with one click. You can also define a calling hierarchy.",
          },
          communication: {
            title: "Communication",
            description:
              "Seamless communication through  chat and notifications that keep you informed at all times. No more searching for messages in various apps (WhatsApp, Viber, Messenger, SMS, etc.). All work-related information is in one place.",
          },
          eventTracking: {
            title: "Event Tracking",
            description:
              "Always know the status of your events, who you're working with, what still needs to be done, and where the event is taking place. In case of any changes, easily modify all event-related information.",
          },
        },
        privacyPolicy: {
          title: "Musician's App - Privacy Policy and Data Protection",
          updated: "Updated: June 2025",
          backToApp: "Back to Musician's App",
          intro:
            'The Musician\'s App application, owned by Softivity (hereinafter: "we"), respects your privacy. This privacy policy explains how we collect, use, and store user data.',
          dataCollection: {
            title: "1. Data We Collect",
            camera: {
              title: "• Camera and Photos:",
              description:
                "Camera and gallery access is used exclusively for uploading profile pictures or sharing images within the application. Photos are not sent to our server without your permission.",
            },
            location: {
              title: "• Location:",
              description:
                "Location is used to display your position on the map (e.g., for finding events or venues) and is not shared with third parties.",
            },
            notifications: {
              title: "• Notifications:",
              description:
                "We use notifications for event reminders and app interactions. You can always disable notifications in your device settings.",
            },
          },
          dataUsage: {
            title: "2. Data Usage",
            description:
              "The data we collect is used exclusively for app functionality and improving user experience. We do not share your data with third parties.",
          },
          security: {
            title: "3. Security",
            description:
              "We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. Although we do everything to keep data secure, we cannot guarantee absolute protection in every case.",
          },
          userRights: {
            title: "4. User Rights",
            description:
              "You have the right to request deletion or access to personal data. For all requests, contact us via email.",
          },
          contact: {
            title: "5. Contact",
            description:
              "For all privacy-related questions, you can contact us:",
            company: "Softivity",
            email: "support@softivity.net",
          },
          consent:
            "By using this application, you agree to this privacy policy.",
        },
        privacyPolicyLink: "Privacy Policy",
        accountDeletion: {
          title: "Account Deletion",
          subtitle:
            "Information about deleting your user account from the Musician's App application.",
          intro:
            "You can request deletion of your account and all associated data at any time. There are two ways:",
          method1: {
            title: "1. Within the app",
            description:
              "Open the app, go to the Settings menu and select the Delete Account option. After confirmation, all your data will be permanently removed.",
          },
          method2: {
            title: "2. Email for account deletion",
            email: "support@softivity.net",
            description:
              "Please include your username or email address associated with the account you want to delete in the email.",
          },
          backToApp: "Back to Musician's App",
        },
        accountDeletionLink: "Account Deletion",
        technologyStack: {
          title: "Technology Stack",
          subtitle: "Built with modern technologies for optimal performance",
          frontend: "Frontend",
          backend: "Backend",
          database: "Database",
        },
        cta: {
          title: "Ready to Start Your Musical Journey?",
          subtitle:
            "Join thousands of musicians who are already using our app to create amazing music.",
        },
        screenshots: {
          title: "App Screenshots",
          subtitle: "Take a look at the beautiful and intuitive interface",
          eventList: "Event List",
          inviteList: "Invite List",
          collaborationView: "Collaboration View",
          eventCalendar: "Event Calendar",
        },
      },
      // Contact Section
      contact: {
        title: "Let's Build Something Amazing",
        subtitle: "Ready to start your project? Get in touch with our team",
        getInTouch: {
          title: "Get In Touch",
          description:
            "We'd love to hear about your project. Whether you need a mobile app, web application, or custom software solution, our team is ready to help bring your vision to life.",
        },
        whyChoose: {
          title: "Why Choose Softivity?",
          reason1: "Cause we care about your success",
          reason2: "Cause we value your input",
          reason3: "Dedicated support and maintenance",
          reason4: "Agile methodology and transparent communication",
        },
        form: {
          name: "Your Name *",
          email: "Email Address *",
          company: "Company Name",
          message: "Project Details *",
          submit: "Send Message",
          namePlaceholder: "John Doe",
          emailPlaceholder: "john@company.com",
          companyPlaceholder: "Your Company",
          messagePlaceholder: "Tell us about your project...",
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
            title: "Musician's App",
            category: "Organizacija nastupa za muzičare",
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
      // Musician App Section
      musicianApp: {
        mobileAppLabel: "Mobilna Aplikacija",
        title: "Musician's App",
        subtitle:
          "Sveobuhvatna mobilna aplikacija dizajnirana za pevače, pevačice, muzičare i menadžere koja olakšava organizaciju nastupa i saradnju. Napravljena za Android i iOS platforme.",
        keyFeatures: {
          title: "Ključne Funkcionalnosti",
          subtitle:
            "Otkrijte moćne funkcionalnosti koje čine ovu aplikaciju savršenom za muzičare",
          addCollaborators: {
            title: "Dodavanje saradnika",
            description:
              "Ako imate mnogo saradnika ili članova benda, lako ih pozovite u svoju grupu saradnika. Aplikacija funkcioniše po principu zatvorenih grupa, što znači da samo članovi, koji su članovi Vaše grupe saradnika, mogu da pristupe vašim događajima i informacijama vezanim za iste.",
          },
          createEvents: {
            title: "Kreiranje događaja",
            description:
              "Kreirajte i upravljajte svirkama jednostavno. Unesite sve neophodne informacije i pozicije koje su vam potrebne za taj događaj. Pozovite sve saradnike za određene pozicije jednim klikom. Takođe možete definisati hijerarhiju pozivanja.",
          },
          communication: {
            title: "Komunikacija",
            description:
              "Neometana komunikacija putem četa i notifikacija koje Vas drže informisanim u svakom trenutku. Nema više traženja poruka u raznim aplikacijama (WhatsApp, Viber, Messenger, SMS itd.). Sve informacije vezane za Vaš posao su na jednom mestu.",
          },
          eventTracking: {
            title: "Praćenje događaja",
            description:
              "Uvek znajte status vaših događaja, sa kim radite, šta još treba da se uradi i gde se događaj održava. U slučaju nekih promena, lako promenite sve informacije vezane za događaj.",
          },
        },
        privacyPolicy: {
          title: "Musician's App - Politika privatnosti i zaštite podataka",
          updated: "Ažurirano: jun 2025.",
          backToApp: "Nazad na Musician's App",
          intro:
            "Aplikacija Musician's App, u vlasništvu kompanije Softivity (u daljem tekstu: 'mi'), poštuje vašu privatnost. Ova politika privatnosti objašnjava kako prikupljamo, koristimo i čuvamo podatke korisnika.",
          dataCollection: {
            title: "1. Podaci koje prikupljamo",
            camera: {
              title: "• Kamera i fotografije:",
              description:
                "Pristup kameri i galeriji koristi se isključivo za učitavanje profilne slike ili deljenje slika unutar aplikacije. Fotografije se ne šalju na naš server bez vaše dozvole.",
            },
            location: {
              title: "• Lokacija:",
              description:
                "Lokacija se koristi kako bi se prikazala vaša pozicija na mapi (npr. za pronalaženje događaja ili mesta) i nije deljena sa trećim stranama.",
            },
            notifications: {
              title: "• Obaveštenja:",
              description:
                "Koristimo obaveštenja za podsetnike u vezi sa događajima i interakcijama u aplikaciji. Uvek možete isključiti obaveštenja u podešavanjima uređaja.",
            },
          },
          dataUsage: {
            title: "2. Korišćenje podataka",
            description:
              "Podaci koje prikupljamo koriste se isključivo za funkcionalnosti aplikacije i poboljšanje korisničkog iskustva. Ne delimo vaše podatke sa trećim licima.",
          },
          security: {
            title: "3. Bezbednost",
            description:
              "Primenjujemo odgovarajuće tehničke i organizacione mere kako bismo zaštitili vaše lične podatke od neovlašćenog pristupa, gubitka ili zloupotrebe. Iako činimo sve da podaci budu sigurni, ne možemo garantovati apsolutnu zaštitu u svakom slučaju.",
          },
          userRights: {
            title: "4. Prava korisnika",
            description:
              "Imate pravo da zatražite brisanje ili pristup ličnim podacima. Za sve zahteve, kontaktirajte nas putem e-pošte.",
          },
          contact: {
            title: "5. Kontakt",
            description:
              "Za sva pitanja u vezi sa privatnošću možete nas kontaktirati:",
            company: "Softivity",
            email: "support@softivity.net",
          },
          consent:
            "Korišćenjem ove aplikacije, saglasni ste sa ovom politikom privatnosti.",
        },
        privacyPolicyLink: "Politika privatnosti",
        accountDeletion: {
          title: "Brisanje naloga",
          subtitle:
            "Informacije o brisanju korisničkog naloga iz Musician's App aplikacije.",
          intro:
            "U svakom trenutku možete zatražiti brisanje svog naloga i svih povezanih podataka. Postoje dva načina:",
          method1: {
            title: "1. Unutar aplikacije",
            description:
              "Otvorite aplikaciju, idite u meni Podešavanja i izaberite opciju Obriši nalog. Nakon potvrde, svi vaši podaci će biti trajno uklonjeni.",
          },
          method2: {
            title: "2. Email za brisanje naloga",
            email: "support@softivity.net",
            description:
              "Molimo vas da u email-u navedete vaš username ili email adresu povezanu sa nalogom koji želite da obrišete.",
          },
          backToApp: "Nazad na Musician's App",
        },
        accountDeletionLink: "Brisanje naloga",
        technologyStack: {
          title: "Tehnološki Stek",
          subtitle:
            "Izgrađeno sa modernim tehnologijama za optimalne performanse",
          frontend: "Frontend",
          backend: "Backend",
          database: "Baza Podataka",
        },
        cta: {
          title: "Spremni ste da počnete svoje muzičko putovanje?",
          subtitle:
            "Pridružite se hiljadama muzičara koji već koriste našu aplikaciju za kreiranje neverovatne muzike.",
        },
        screenshots: {
          title: "Slike Aplikacije",
          subtitle: "Pogledajte lep i intuitivan interfejs",
          eventList: "Lista Događaja",
          inviteList: "Lista Poziva",
          collaborationView: "Pregled Saradnje",
          eventCalendar: "Kalendar Događaja",
        },
      },
      // Contact Section
      contact: {
        title: "Hajde da Izgradimo Nešto Neverovatno",
        subtitle:
          "Spremni ste da pokrenete projekat? Stupite u kontakt sa našim timom",
        getInTouch: {
          title: "Stupite u Kontakt",
          description:
            "Voleli bismo da čujemo o vašem projektu. Bilo da vam treba mobilna aplikacija, web aplikacija ili prilagođeno softversko rešenje, naš tim je spreman da pomogne u ostvarivanju vaše vizije.",
        },
        whyChoose: {
          title: "Zašto Izabrati Softivity?",
          reason1: "Jer nam je stalo do vašeg uspeha",
          reason2: "Jer cenimo vaš doprinos",
          reason3: "Posvećena podrška i održavanje",
          reason4: "Agile metodologija i transparentna komunikacija",
        },
        form: {
          name: "Vaše Ime *",
          email: "Email Adresa *",
          company: "Naziv Kompanije",
          message: "Detalji Projekta *",
          submit: "Pošalji Poruku",
          namePlaceholder: "Marko Petrović",
          emailPlaceholder: "marko@kompanija.com",
          companyPlaceholder: "Vaša Kompanija",
          messagePlaceholder: "Recite nam o vašem projektu...",
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
