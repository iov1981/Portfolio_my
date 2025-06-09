import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2024 Алексей Хрипунов. Все права защищены.
            </p>
          </div>
          
          <div className="flex items-center text-gray-400">
            <span>Сделано с</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
            <span>в Пензе, Россия</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;