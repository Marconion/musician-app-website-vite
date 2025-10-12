import {
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Wallet,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Solutions() {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Building2,
      title: "Enterprise",
      description: "Scalable solutions for large organizations",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShoppingCart,
      title: t("solutions.ecommerce.title"),
      description: t("solutions.ecommerce.description"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Stethoscope,
      title: t("solutions.healthcare.title"),
      description: t("solutions.healthcare.description"),
      color: "from-red-500 to-pink-500",
    },
    {
      icon: GraduationCap,
      title: t("solutions.education.title"),
      description: t("solutions.education.description"),
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Wallet,
      title: t("solutions.finance.title"),
      description: t("solutions.finance.description"),
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Startups",
      description: "MVP and product development",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("solutions.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("solutions.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              <div
                className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                <solution.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-center font-bold text-gray-900 mb-2">
                {solution.title}
              </h3>

              <p className="text-center text-sm text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
