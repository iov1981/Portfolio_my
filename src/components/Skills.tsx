import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Ручное тестирование', level: 95 },
    { name: 'Postman (API тестирование)', level: 90 },
    { name: 'Jira', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'Chrome DevTools', level: 85 },
    { name: 'Git', level: 75 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'Тест-дизайн', level: 90 },
    { name: 'Регрессионное тестирование', level: 95 },
    { name: 'Кроссбраузерное тестирование', level: 85 },
    { name: 'Python (автотесты)', level: 60 },
    { name: 'Английский язык', level: 65 }
  ];

  const categories = {
    'Основные навыки': [
      'Ручное тестирование веб-приложений',
      'Разработка тест-кейсов и чек-листов',
      'Функциональное и нефункциональное тестирование',
      'Регрессионное тестирование',
      'Позитивное/негативное тестирование',
      'Тест-дизайн и работа со спецификацией'
    ],
    'Инструменты': [
      'Postman (API тестирование)',
      'Chrome DevTools',
      'Jira (баг-репорты)',
      'Git (системы контроля версий)',
      'SQL (работа с базами данных)'
    ],
    'Дополнительные навыки': [
      'Кроссбраузерное тестирование',
      'Кроссплатформенное тестирование',
      'Тестирование безопасности',
      'Автоматизация отчётов',
      'Python (базовые автотесты)'
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Навыки и компетенции
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Технологии и методологии, которыми я владею в области тестирования ПО
          </p>
        </div>

        {/* Навыки с прогресс-барами */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Уровень владения</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                  <span className="text-blue-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Категории навыков */}
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, skillsList]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {skillsList.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;