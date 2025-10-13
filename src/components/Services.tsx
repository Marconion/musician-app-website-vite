import { Smartphone, Globe, Layers, Cloud, Shield, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "./AnimatedSection";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Smartphone,
      title: t("services.mobileDev.title"),
      description: t("services.mobileDev.description"),
      features: ["iOS & Android", "React Native"],
    },
    {
      icon: Globe,
      title: t("services.webDev.title"),
      description: t("services.webDev.description"),
      features: ["React", "Node.js", "Progressive Web Apps", "E-commerce"],
    },
    {
      icon: Layers,
      title: t("services.customSoftware.title"),
      description: t("services.customSoftware.description"),
      features: ["Enterprise Solutions"],
    },
    // {
    //   icon: Cloud,
    //   title: t("services.cloudSolutions.title"),
    //   description: t("services.cloudSolutions.description"),
    //   features: ["AWS & Azure", "DevOps", "Microservices", "Serverless"],
    // },
    // {
    //   icon: Shield,
    //   title: t("services.cybersecurity.title"),
    //   description: t("services.cybersecurity.description"),
    //   features: [
    //     "Penetration Testing",
    //     "QA Automation",
    //     "Code Review",
    //     "Compliance",
    //   ],
    // },
    // {
    //   icon: Zap,
    //   title: t("services.consulting.title"),
    //   description: t("services.consulting.description"),
    //   features: [
    //     "Tech Stack Selection",
    //     "Architecture Design",
    //     "Digital Strategy",
    //     "Team Augmentation",
    //   ],
    // },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection animationType="fadeUp" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("services.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              animationType="fadeUp"
              delay={index * 100}
              threshold={0.2}>
              <div className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
