import React from 'react';
import { ChevronDown, Github, MessageCircle, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            Привет, я{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Алексей
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            QA Engineer / Инженер по тестированию
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Специализируюсь на ручном тестировании веб-приложений, API тестировании и обеспечении качества ПО
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Postman</span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Jira</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">SQL</span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">DevTools</span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">Git</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToProjects}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Посмотреть проекты
          </button>
          <a 
            href="mailto:hripunov60@gmail.com"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Связаться со мной
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a 
            href="https://github.com/iov1981" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://t.me/iov1981" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
          <a 
            href="mailto:hripunov60@gmail.com" 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600 hover:text-blue-600 transition-colors duration-300"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;