import React from 'react';
import { Mail, Phone, MapPin, Github, MessageCircle, Send, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готов к новым проектам и сотрудничеству. Рассматриваю стажировки, проектную и удалённую работу
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Давайте поговорим</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Я всегда открыт для обсуждения новых возможностей в области тестирования ПО, 
                интересных проектов или просто для дружеского разговора о технологиях и качестве.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <a 
                    href="mailto:hripunov60@gmail.com"
                    className="text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors"
                  >
                    hripunov60@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Телефон</p>
                  <a 
                    href="tel:+79023449722"
                    className="text-gray-900 font-semibold text-lg hover:text-green-600 transition-colors"
                  >
                    +7 (902) 344-97-22
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Местоположение</p>
                  <p className="text-gray-900 font-semibold text-lg">Пенза, Россия</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Дата рождения</p>
                  <p className="text-gray-900 font-semibold text-lg">08.11.1981</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/iov1981" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-blue-100 p-3 rounded-lg transition-colors duration-300 group"
                >
                  <Github className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </a>
                <a 
                  href="https://t.me/iov1981" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-blue-100 p-3 rounded-lg transition-colors duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                </a>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Готов рассматривать:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Стажировки в области QA
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Проектную работу
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Удалённую занятость
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="О чем хотите поговорить?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Расскажите подробнее о вашем проекте или предложении..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;