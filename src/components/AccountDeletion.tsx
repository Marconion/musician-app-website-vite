import { ArrowLeft, Globe, Mail, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function AccountDeletion() {
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
            {t("musicianApp.accountDeletion.backToApp")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors px-3 py-1 rounded-lg border border-blue-200 hover:bg-blue-50">
            <Globe className="w-4 h-4 mr-2" />
            {i18n.language === "en" ? "SR" : "EN"}
          </button>
        </div>
      </div>

      {/* Account Deletion Content */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {t("musicianApp.accountDeletion.title")}
            </h1>

            <div className="text-lg text-gray-700 leading-relaxed space-y-8">
              <p className="text-xl">
                {t("musicianApp.accountDeletion.subtitle")}
              </p>

              <p>{t("musicianApp.accountDeletion.intro")}</p>

              {/* Method 1 - In App */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {t("musicianApp.accountDeletion.method1.title")}
                    </h2>
                    <p className="text-gray-700">
                      {t("musicianApp.accountDeletion.method1.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Or Divider */}
              <div className="text-center">
                <span className="text-gray-500 font-medium text-lg">
                  {i18n.language === "en" ? "or" : "ili"}
                </span>
              </div>

              {/* Method 2 - Email */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {t("musicianApp.accountDeletion.method2.title")}
                    </h2>

                    <div className="bg-white border border-green-300 rounded-lg p-4 mb-4">
                      <p className="text-sm text-green-700 font-medium mb-2">
                        {i18n.language === "en"
                          ? "Email Address:"
                          : "Email adresa:"}
                      </p>
                      <a
                        href="mailto:support@softivity.net?subject=Account Deletion Request"
                        className="text-lg font-semibold text-green-700 hover:text-green-800 underline">
                        {t("musicianApp.accountDeletion.method2.email")}
                      </a>
                    </div>

                    <p className="text-gray-700">
                      {t("musicianApp.accountDeletion.method2.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold text-lg">!</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-red-800 font-semibold">
                      {i18n.language === "en"
                        ? "Important: Account deletion is permanent and cannot be undone. All your data, events, and collaborations will be permanently removed."
                        : "Važno: Brisanje naloga je trajno i ne može se poništiti. Svi vaši podaci, događaji i saradnje će biti trajno uklonjeni."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
