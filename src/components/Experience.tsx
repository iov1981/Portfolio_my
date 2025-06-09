import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'QA Engineer (Практика)',
      company: 'Skillbox',
      location: 'Пенза, Россия (удалённо)',
      period: 'Декабрь 2023 — по настоящее время',
      description: [
        'Разработка и написание тест-кейсов и чек-листов',
        'Проверка первичной документации и спецификаций',
        'Проведение функционального, регрессионного тестирования',
        'API тестирование через Postman (серый ящик)',
        'Кроссбраузерное и кроссплатформенное тестирование',
        'Тестирование безопасности и клиентских уязвимостей',
        'Автоматизация отчётов о баг-репортах в Jira'
      ],
      technologies: ['Jira', 'Postman', 'Chrome DevTools', 'SQL', 'Git'],
      achievements: [
        'Полностью протестирован интернет-магазин от спецификаций до приёмки',
        'Найдены критические ошибки — ускорили загрузку сайта на 10%',
        'Разработана система автотестов для облачного сервиса'
      ]
    }
  ];

  const education = [
    {
      institution: 'Skillbox',
      degree: 'Профессия "Инженер по тестированию"',
      period: '2023-2024',
      description: '400 академических часов обучения'
    },
    {
      institution: 'Профессиональный лицей №21',
      degree: 'Технология продуктов общественного питания',
      period: '2001',
      description: 'Пенза'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Опыт и образование
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мой профессиональный путь в области тестирования ПО
          </p>
        </div>

        {/* Опыт работы */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Опыт работы</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ml-12 md:ml-0 md:max-w-2xl md:mx-auto">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h4>
                    <h5 className="text-xl font-semibold text-blue-600 mb-3">{exp.company}</h5>
                    <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-gray-900 mb-3">Обязанности:</h6>
                    <ul className="space-y-2 text-gray-700">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-gray-900 mb-3">Технологии:</h6>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h6 className="text-lg font-semibold text-gray-900 mb-3">Достижения:</h6>
                    <ul className="space-y-2 text-gray-700">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <Award className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Образование */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Образование</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                <h5 className="text-lg font-semibold text-blue-600 mb-2">{edu.institution}</h5>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </div>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;