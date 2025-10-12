import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Innovative Software Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Ideas Into
              <span className="text-blue-600"> Digital Reality</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Softivity delivers cutting-edge software and mobile application solutions that drive business growth and enhance user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium border-2 border-gray-200"
              >
                View Our Work
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                  </div>
                  <div className="flex-1 h-8 bg-gray-100 rounded"></div>
                </div>

                <div className="space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl"></div>
                  <div className="h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
