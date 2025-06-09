import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            Алексей Хрипунов
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              О себе
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Навыки
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Проекты
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Опыт
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Контакты
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
              >
                О себе
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
              >
                Навыки
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
              >
                Проекты
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
              >
                Опыт
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-left"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;