import { ArrowLeft, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "sr" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    // Immediately scroll to top when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Trigger fade-in animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-white transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            to="/musician-app"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("musicianApp.privacyPolicy.backToApp")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors px-3 py-1 rounded-lg border border-blue-200 hover:bg-blue-50">
            <Globe className="w-4 h-4 mr-2" />
            {i18n.language === "en" ? "SR" : "EN"}
          </button>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("musicianApp.privacyPolicy.title")}
            </h1>

            <div className="text-sm text-gray-600 mb-8">
              <strong>{t("musicianApp.privacyPolicy.updated")}</strong>
            </div>

            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>{t("musicianApp.privacyPolicy.intro")}</p>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.privacyPolicy.dataCollection.title")}
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {t(
                        "musicianApp.privacyPolicy.dataCollection.camera.title"
                      )}
                    </h3>
                    <p>
                      {t(
                        "musicianApp.privacyPolicy.dataCollection.camera.description"
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {t(
                        "musicianApp.privacyPolicy.dataCollection.location.title"
                      )}
                    </h3>
                    <p>
                      {t(
                        "musicianApp.privacyPolicy.dataCollection.location.description"
                      )}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {t(
                        "musicianApp.privacyPolicy.dataCollection.notifications.title"
                      )}
                    </h3>
                    <p>
                      {t(
                        "musicianApp.privacyPolicy.dataCollection.notifications.description"
                      )}
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.privacyPolicy.dataUsage.title")}
                </h2>
                <p>{t("musicianApp.privacyPolicy.dataUsage.description")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.privacyPolicy.security.title")}
                </h2>
                <p>{t("musicianApp.privacyPolicy.security.description")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.privacyPolicy.userRights.title")}
                </h2>
                <p>{t("musicianApp.privacyPolicy.userRights.description")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.privacyPolicy.contact.title")}
                </h2>
                <p>{t("musicianApp.privacyPolicy.contact.description")}</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
                  <div className="mb-2">
                    <p>Ime firme:</p>
                    <strong>
                      {t("musicianApp.privacyPolicy.contact.company")}
                    </strong>
                  </div>
                  <div>
                    {/* <p>{t("musicianApp.privacyPolicy.contact.email")}</p>{" "} */}
                    <p>Email:</p>
                    <a
                      href="mailto:support@softivity.net"
                      className="text-blue-600 hover:text-blue-700 underline">
                      support@softivity.net
                    </a>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                <p className="text-center text-gray-700 font-medium">
                  {t("musicianApp.privacyPolicy.consent")}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
