import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/Logo Softivity.webp";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggle } = useDarkMode();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait a bit for the page to load, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    if (location.pathname !== "/") {
      // If we're not on home page, navigate to home
      navigate("/");
      // Wait a bit for the page to load, then scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      // We're already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 shadow-sm z-50 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={navigateToHome}>
            <img
              src={Logo}
              alt="Softivity Logo"
              className="w-44 md:w-1/4 lg:w-1/4 dark:invert"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              {t("nav.services")}
            </button>
            {/* <button
              onClick={() => scrollToSection("solutions")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              {t("nav.solutions")}
            </button> */}
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              {t("nav.process")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              {t("nav.portfolio")}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="text-gray-700 dark:text-gray-200 bg-transparent dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-3 py-1 focus:outline-none focus:border-blue-600 cursor-pointer">
                <option value="sr">Srpski</option>
                <option value="en">English</option>
              </select>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              {t("nav.contact")}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-blue-600">
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t dark:border-gray-700">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
              {t("nav.services")}
            </button>
            <button
              onClick={() => scrollToSection("solutions")}
              className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
              {t("nav.solutions")}
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
              {t("nav.process")}
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
              {t("nav.portfolio")}
            </button>

            {/* Language Selector Mobile */}
            <div className="py-2">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="w-full text-gray-700 dark:text-gray-200 bg-transparent dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-blue-600">
                <option value="en">🇺🇸 Engleski</option>
                <option value="sr">🇷🇸 Srpski</option>
              </select>
            </div>

            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              {t("nav.contact")}
            </button>

            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              className="flex items-center space-x-2 w-full text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2">
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span>{isDark ? "Svijetli mod" : "Tamni mod"}</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
