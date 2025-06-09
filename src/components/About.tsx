import React from 'react';
import { TestTube, Bug, Shield, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Обо мне
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            QA Engineer с опытом в ручном тестировании и страстью к качеству ПО
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Привет! Меня зовут <strong className="text-gray-900">Алексей Хрипунов</strong>, и я увлеченный QA Engineer. 
              С детства интересовался IT — в школе программировал на Pascal. Сегодня я выбрал тестирование как путь развития, 
              потому что считаю, что мои качества — педантичность, внимание к деталям и перфекционизм — идеально подходят для этой профессии.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мне интересно не просто искать ошибки, а делать продукт лучше. Специализируюсь на ручном тестировании веб-приложений, 
              API тестировании и работе с современными инструментами качества.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Дата рождения:</span>
              </div>
              <p className="text-gray-700">08.11.1981 (43 года)</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Postman</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Jira</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">SQL</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">DevTools</span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <TestTube className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Тестирование</h3>
              </div>
              <p className="text-gray-700">
                Функциональное, регрессионное, API тестирование с использованием современных методологий
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Bug className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Баг-репорты</h3>
              </div>
              <p className="text-gray-700">
                Детальное документирование дефектов и работа с системами трекинга задач
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Качество</h3>
              </div>
              <p className="text-gray-700">
                Обеспечение высокого качества продукта на всех этапах разработки
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;