import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HealthConnect',
    category: 'Healthcare Mobile App',
    description: 'Patient management and telemedicine platform connecting healthcare providers with patients.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Node.js', 'HIPAA Compliant']
  },
  {
    title: 'ShopHub',
    category: 'E-Commerce Platform',
    description: 'Multi-vendor marketplace with real-time inventory management and secure payment processing.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Stripe', 'AWS']
  },
  {
    title: 'EduLearn',
    category: 'Education Platform',
    description: 'Interactive learning platform with live classes, assignments, and progress tracking.',
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'WebRTC', 'MongoDB']
  },
  {
    title: 'FinanceTracker Pro',
    category: 'FinTech Application',
    description: 'Personal finance management with AI-powered insights and investment tracking.',
    image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Flutter', 'Firebase', 'ML']
  },
  {
    title: 'LogisticFlow',
    category: 'Enterprise Solution',
    description: 'End-to-end supply chain management system with real-time tracking and analytics.',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Angular', 'PostgreSQL', 'Docker']
  },
  {
    title: 'FitnessPro',
    category: 'Lifestyle App',
    description: 'Comprehensive fitness tracking with personalized workout plans and nutrition guidance.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Swift', 'Kotlin', 'REST API']
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Successful solutions we've delivered for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                    </div>
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
                      className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
