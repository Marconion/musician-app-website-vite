import { Mail } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { useTranslation } from "react-i18next";
import Logo from "../assets/Logo Softivity.webp";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 bg-white p-2 rounded-lg w-max">
              <img src={Logo} alt="Softivity Logo" className="w-40" />
              {/* <Code2 className="w-8 h-8 text-blue-500" strokeWidth={2.5} /> */}
              {/* <span className="text-2xl font-bold text-white">Softivity</span> */}
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a> */}
              {/* <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
              {/* <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a> */}
              <a
                href="mailto:hello@softivity.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/musicians_app?igsh=MTZoY3kwcXg4cDdjNQ==/"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-500 transition-colors">
                  {t("footer.mobileDevelopment", "Mobile Development")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-500 transition-colors">
                  {t("footer.webDevelopment", "Web Development")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-500 transition-colors">
                  {t("footer.customSoftware", "Custom Software")}
                </a>
              </li>
              {/* <li>
                <a
                  href="#services"
                  className="hover:text-blue-500 transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-500 transition-colors">
                  Consulting
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-blue-500 transition-colors">
                  {t("footer.portfolio", "Portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-blue-500 transition-colors">
                  {t("footer.ourProcess", "Our Process")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-500 transition-colors">
                  {t("footer.contactUs", "Contact Us")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Softivity. {t("footer.rights")}
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
