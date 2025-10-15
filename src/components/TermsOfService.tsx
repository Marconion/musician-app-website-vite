import { ArrowLeft, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
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
            {t("musicianApp.termsOfService.backToApp")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors px-3 py-1 rounded-lg border border-blue-200 hover:bg-blue-50">
            <Globe className="w-4 h-4 mr-2" />
            {i18n.language === "en" ? "SR" : "EN"}
          </button>
        </div>
      </div>

      {/* Terms of Service Content */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("musicianApp.termsOfService.title")}
            </h1>

            <div className="text-sm text-gray-600 mb-8">
              <strong>{t("musicianApp.termsOfService.updated")}</strong>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">
                    {t("musicianApp.termsOfService.owner.title")}
                  </p>
                  <strong className="text-gray-900">
                    {t("musicianApp.termsOfService.owner.company")}
                  </strong>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {t("musicianApp.termsOfService.owner.location")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">📧 Email:</p>
                  <a
                    href="mailto:support@softivity.net"
                    className="text-blue-600 hover:text-blue-700 underline">
                    support@softivity.net
                  </a>
                </div>
              </div>
            </div>

            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.termsOfService.introduction.title")}
                </h2>
                <p className="mb-3">
                  {t("musicianApp.termsOfService.introduction.paragraph1")}
                </p>
                <p className="mb-3">
                  {t("musicianApp.termsOfService.introduction.paragraph2")}
                </p>
                <p>{t("musicianApp.termsOfService.introduction.paragraph3")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.termsOfService.serviceDescription.title")}
                </h2>
                <p className="mb-3">
                  {t(
                    "musicianApp.termsOfService.serviceDescription.paragraph1"
                  )}
                </p>
                <p className="mb-3">
                  {t(
                    "musicianApp.termsOfService.serviceDescription.paragraph2"
                  )}
                </p>
                <p>
                  {t(
                    "musicianApp.termsOfService.serviceDescription.paragraph3"
                  )}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.termsOfService.registration.title")}
                </h2>
                <p className="mb-3">
                  {t("musicianApp.termsOfService.registration.paragraph1")}
                </p>
                <p className="mb-3">
                  {t("musicianApp.termsOfService.registration.paragraph2")}
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                  <p className="font-semibold text-gray-900 mb-2">
                    {t("musicianApp.termsOfService.registration.prohibited")}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>
                      {t(
                        "musicianApp.termsOfService.registration.prohibitedItem1"
                      )}
                    </li>
                    <li>
                      {t(
                        "musicianApp.termsOfService.registration.prohibitedItem2"
                      )}
                    </li>
                    <li>
                      {t(
                        "musicianApp.termsOfService.registration.prohibitedItem3"
                      )}
                    </li>
                  </ul>
                </div>

                <p>{t("musicianApp.termsOfService.registration.paragraph3")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.termsOfService.userObligations.title")}
                </h2>
                <p className="mb-3">
                  {t("musicianApp.termsOfService.userObligations.paragraph1")}
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                  <p className="font-semibold text-gray-900 mb-2">
                    {t(
                      "musicianApp.termsOfService.userObligations.prohibitedContent"
                    )}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>
                      {t(
                        "musicianApp.termsOfService.userObligations.prohibitedItem1"
                      )}
                    </li>
                    <li>
                      {t(
                        "musicianApp.termsOfService.userObligations.prohibitedItem2"
                      )}
                    </li>
                    <li>
                      {t(
                        "musicianApp.termsOfService.userObligations.prohibitedItem3"
                      )}
                    </li>
                  </ul>
                </div>

                <p>
                  {t("musicianApp.termsOfService.userObligations.paragraph2")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {t("musicianApp.termsOfService.companyLiability.title")}
                </h2>
                <p className="mb-3">
                  {t("musicianApp.termsOfService.companyLiability.paragraph1")}
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                  <p className="font-semibold text-gray-900 mb-2">
                    {t(
                      "musicianApp.termsOfService.companyLiability.notResponsible"
                    )}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>
                      {t(
                        "musicianApp.termsOfService.companyLiability.notResponsibleItem1"
                      )}
                    </li>
                    <li>
                      {t(
                        "musicianApp.termsOfService.companyLiability.notResponsibleItem2"
                      )}
                    </li>
                    <li>
                      {t(
                        "musicianApp.termsOfService.companyLiability.notResponsibleItem3"
                      )}
                    </li>
                    <li>
                      {t(
                        "musicianApp.termsOfService.companyLiability.notResponsibleItem4"
                      )}
                    </li>
                  </ul>
                </div>

                <p className="mb-3">
                  {t("musicianApp.termsOfService.companyLiability.paragraph2")}
                </p>
                <p>
                  {t("musicianApp.termsOfService.companyLiability.paragraph3")}
                </p>
              </section>

              <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
                <p className="text-center text-gray-700 font-medium">
                  {t("musicianApp.termsOfService.acceptance")}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
