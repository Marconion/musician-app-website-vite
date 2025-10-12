import {
  ArrowLeft,
  Download,
  Star,
  UserPlus,
  Calendar,
  MessageCircle,
  BarChart3,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cover from "../assets/Cover.png";
import screen_1 from "../assets/screenshots/5.jpg";
import screen_2 from "../assets/screenshots/3.jpg";
import screen_3 from "../assets/screenshots/4.jpg";
import screen_4 from "../assets/screenshots/2.jpg";
import { StoreBadges } from "./StoreBadges";

export default function MusicianAppPage() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "sr" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    // Immediately scroll to top when component mounts (override smooth scroll)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Trigger fade-in animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50); // Small delay for smoother effect

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: t("musicianApp.keyFeatures.addCollaborators.title"),
      description: t("musicianApp.keyFeatures.addCollaborators.description"),
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t("musicianApp.keyFeatures.createEvents.title"),
      description: t("musicianApp.keyFeatures.createEvents.description"),
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t("musicianApp.keyFeatures.communication.title"),
      description: t("musicianApp.keyFeatures.communication.description"),
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t("musicianApp.keyFeatures.eventTracking.title"),
      description: t("musicianApp.keyFeatures.eventTracking.description"),
    },
  ];

  const screenshots = [
    { id: 1, img: screen_1, alt: t("musicianApp.screenshots.eventList") },
    { id: 2, img: screen_2, alt: t("musicianApp.screenshots.inviteList") },
    {
      id: 3,
      img: screen_3,
      alt: t("musicianApp.screenshots.collaborationView"),
    },
    { id: 4, img: screen_4, alt: t("musicianApp.screenshots.eventCalendar") },
  ];

  return (
    <div
      className={`min-h-screen bg-white transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors px-3 py-1 rounded-lg border border-blue-200 hover:bg-blue-50">
            <Globe className="w-4 h-4 mr-2" />
            {i18n.language === "en" ? "SR" : "EN"}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-200 via-white to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium text-blue-600 mb-4">
                {t("musicianApp.mobileAppLabel")}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("musicianApp.title")}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t("musicianApp.subtitle")}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                  React Native
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                  Node.js
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                  PostgreSQL
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">No</span>
                  <span className="ml-1 text-gray-600">Rating Yet</span>
                </div>
                {/* <div className="flex items-center">
                  <Download className="w-5 h-5 text-blue-600" />
                  <span className="ml-1 font-semibold">10K+</span>
                  <span className="ml-1 text-gray-600">Downloads</span>
                </div> */}
              </div>
            </div>

            <div className="lg:text-right">
              <img
                src={Cover}
                alt="Musician App"
                className="w-full max-w-md mx-auto lg:ml-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("musicianApp.keyFeatures.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("musicianApp.keyFeatures.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("musicianApp.screenshots.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("musicianApp.screenshots.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot) => (
              <div key={screenshot.id}>
                <div className="text-center">
                  {/* <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-gray-600">{screenshot.alt}</p> */}
                  <img
                    src={screenshot.img}
                    alt={screenshot.alt}
                    className="rounded-2xl shadow-md w-5/6 sm:w-4/5 md:w-full mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("musicianApp.technologyStack.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("musicianApp.technologyStack.subtitle")}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("musicianApp.technologyStack.frontend")}
                </h3>
                <div className="space-y-2">
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                    React Native
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                    JavaScript
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                    React Navigation
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("musicianApp.technologyStack.backend")}
                </h3>
                <div className="space-y-2">
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                    PostgreSQL
                  </div>
                  {/* <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                    Express.js
                  </div>
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                    Socket.io
                  </div> */}
                </div>
              </div>

              {/* <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("musicianApp.technologyStack.database")}
                </h3>
                <div className="space-y-2">
                  <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg">
                    PostgreSQL
                  </div>
                  <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg">
                    Redis
                  </div>
                  <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg">
                    Prisma ORM
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t("musicianApp.cta.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t("musicianApp.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StoreBadges />
          </div>

          {/* Privacy Policy Link */}
          <div className="mt-8 space-y-2">
            <Link
              to="/privacy-policy"
              className="block text-blue-100 hover:text-white underline transition-colors">
              {t("musicianApp.privacyPolicyLink")}
            </Link>
            <Link
              to="/account-deletion"
              className="block text-blue-100 hover:text-white underline transition-colors">
              {t("musicianApp.accountDeletionLink")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
