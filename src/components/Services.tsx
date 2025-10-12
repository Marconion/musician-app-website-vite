import { Smartphone, Globe, Layers, Cloud, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Swift & Kotlin']
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, scalable web applications built with modern frameworks and best practices.',
    features: ['React & Vue', 'Node.js', 'Progressive Web Apps', 'E-commerce']
  },
  {
    icon: Layers,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to meet your specific business requirements and workflows.',
    features: ['Enterprise Solutions', 'CRM Systems', 'Automation', 'Integration']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure setup, migration, and optimization for improved scalability and performance.',
    features: ['AWS & Azure', 'DevOps', 'Microservices', 'Serverless']
  },
  {
    icon: Shield,
    title: 'Security & Testing',
    description: 'Comprehensive security audits and quality assurance to ensure your applications are secure and reliable.',
    features: ['Penetration Testing', 'QA Automation', 'Code Review', 'Compliance']
  },
  {
    icon: Zap,
    title: 'Consulting & Strategy',
    description: 'Expert guidance on technology strategy, digital transformation, and architecture planning.',
    features: ['Tech Stack Selection', 'Architecture Design', 'Digital Strategy', 'Team Augmentation']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
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
                    className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
