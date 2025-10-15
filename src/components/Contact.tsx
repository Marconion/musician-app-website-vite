import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "./AnimatedSection";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Konfiguracija EmailJS (trebate da postavite svoje ključeve)
      await emailjs.send(
        "service_2krdp3k", // Service ID iz EmailJS dashboard-a
        "template_merzmk9", // Template ID iz EmailJS dashboard-a
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: "support@softivity.net",
        },
        "rzg-IM__5DhzYYJ9U" // Public Key iz EmailJS dashboard-a
      );

      alert(
        t(
          "contact.form.successMessage"
          // "Thank you for your message! We will get back to you soon."
        )
      );
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Greška pri slanju poruke. Molimo pokušajte ponovo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection animationType="fadeUp" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <AnimatedSection animationType="fadeLeft" delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("contact.getInTouch.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t("contact.getInTouch.description")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t("contact.info.email")}
                    </h4>
                    <a
                      href="mailto:hello@softivity.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors">
                      support@softivity.net
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Call Us
                    </h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-blue-600 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div> */}

                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Visit Us
                    </h4>
                    <p className="text-gray-600">
                      123 Innovation Drive
                      <br />
                      Tech Valley, CA 94000
                    </p>
                  </div>
                </div> */}
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
                <h4 className="text-xl font-bold mb-3">
                  {t("contact.whyChoose.title")}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{t("contact.whyChoose.reason1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{t("contact.whyChoose.reason2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{t("contact.whyChoose.reason3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>{t("contact.whyChoose.reason4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fadeRight" delay={200}>
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors box-border"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors box-border"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors box-border"
                    placeholder={t("contact.form.companyPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none box-border"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                  <span>
                    {isLoading ? "Šalje se..." : t("contact.form.submit")}
                  </span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
