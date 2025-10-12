import { Lightbulb, Pencil, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultations.',
    points: ['Requirements Analysis', 'Market Research', 'Project Roadmap', 'Technology Selection']
  },
  {
    icon: Pencil,
    title: 'Design & Prototyping',
    description: 'Our design team creates intuitive user interfaces and interactive prototypes to visualize your solution.',
    points: ['UX/UI Design', 'Wireframing', 'Interactive Prototypes', 'User Testing']
  },
  {
    icon: Code,
    title: 'Development & Testing',
    description: 'Expert developers build your solution using agile methodology with regular updates and quality assurance.',
    points: ['Agile Development', 'Code Reviews', 'Automated Testing', 'Performance Optimization']
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We deploy your solution and provide ongoing maintenance, updates, and technical support.',
    points: ['Deployment', 'Training', 'Monitoring', 'Continuous Improvement']
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven methodology that delivers results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-lg font-bold text-blue-600">{index + 1}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
