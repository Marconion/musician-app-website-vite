import { Lightbulb, Pencil, Code, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AnimatedSection } from "./AnimatedSection";

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Lightbulb,
      title: t("process.steps.discovery.title"),
      description: t("process.steps.discovery.description"),
      points: t("process.steps.discovery.points", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Pencil,
      title: t("process.steps.design.title"),
      description: t("process.steps.design.description"),
      points: t("process.steps.design.points", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Code,
      title: t("process.steps.development.title"),
      description: t("process.steps.development.description"),
      points: t("process.steps.development.points", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Rocket,
      title: t("process.steps.launch.title"),
      description: t("process.steps.launch.description"),
      points: t("process.steps.launch.points", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection animationType="fadeUp" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("process.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("process.subtitle")}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animationType="fadeUp"
              delay={index * 100}
              threshold={0.2}>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 h-full shadow-small hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-inner shadow-white">
                    <step.icon
                      className="w-6 h-6 text-white"
                      strokeWidth={2.5}
                    />
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner shadow-gray-500/40">
                    <span className="text-lg font-bold text-blue-600">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-sm text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
