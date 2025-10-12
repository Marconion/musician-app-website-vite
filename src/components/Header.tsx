import { Menu, X, Code2 } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Code2 className="w-8 h-8 text-blue-600" strokeWidth={2.5} />
            <span className="text-2xl font-bold text-gray-900">Softivity</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('solutions')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Solutions
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Process
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Us
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('solutions')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
              Solutions
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
              Process
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
