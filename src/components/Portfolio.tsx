import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";
import Cover from "../assets/Cover.png";

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("portfolio.projects.musicianApp.title"),
      category: t("portfolio.projects.musicianApp.category"),
      description: t("portfolio.projects.musicianApp.description"),
      image: Cover,
      tags: ["React Native", "Node.js", "PostgreSQL"],
    },
  ];
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection animationType="fadeUp" delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("portfolio.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("portfolio.subtitle")}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              animationType="fadeUp"
              delay={index * 150}
              threshold={0.2}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 right-4">
                      <Link
                        to="/musician-app"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    {project.category}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
