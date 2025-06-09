import React from 'react';
import { Github, ExternalLink, TestTube, Bug, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Тестирование интернет-магазина',
      description: 'Полный цикл тестирования e-commerce платформы от анализа спецификаций до приёмочного тестирования. Найдены критические ошибки, ускорившие загрузку сайта на 10%.',
      image: 'https://images.pexels.com/photos/4968639/pexels-photo-4968639.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jira', 'Postman', 'DevTools', 'SQL'],
      github: 'https://hripunov60.atlassian.net/jira/software/projects/SKIL/boards/3',
      demo: 'https://hripunov60.atlassian.net/jira/software/projects/SKIL/boards/3',
      achievements: [
        'Полное тестирование от спецификации до приёмки',
        'Найдены критические ошибки интерфейса',
        'Ускорение загрузки сайта на 10%',
        'Создание диаграммы состояний и переходов'
      ]
    },
    {
      title: 'SkillCinema Android App',
      description: 'Тестирование мобильного приложения для просмотра фильмов. Проведено функциональное, UI и регрессионное тестирование.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Android Testing', 'UI Testing', 'Regression Testing'],
      github: 'https://gitlab.skillbox.ru/aleksei_khripunov/SkillboxApp_SkillCinema_Android',
      demo: '#',
      achievements: [
        'Тестирование Android приложения',
        'UI/UX тестирование',
        'Функциональное тестирование',
        'Регрессионное тестирование'
      ]
    },
    {
      title: 'Система автотестов',
      description: 'Разработка автоматизированных тестов для облачного сервиса. Улучшено взаимодействие с командой разработки через понятные отчёты об ошибках.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Automation', 'Git', 'CI/CD'],
      github: 'https://gitlab.skillbox.ru/aleksei_khripunov/my_auto_tests1',
      demo: '#',
      achievements: [
        'Автоматизация тестирования',
        'Улучшение коммуникации с разработчиками',
        'Создание понятных отчётов',
        'Интеграция в процесс разработки'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Проекты и достижения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Практические проекты по тестированию, демонстрирующие мои навыки и подход к обеспечению качества
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Достижения:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">Репозиторий</span>
                    </a>
                    {project.demo !== '#' && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Проект</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная секция с сертификатами */}
        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Сертификаты и обучение</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <TestTube className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Профессия "Инженер по тестированию"</h4>
                  <p className="text-gray-600">Skillbox, 2023-2024</p>
                </div>
              </div>
              <p className="text-gray-700">400 академических часов обучения тестированию ПО</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-purple-600 mr-3" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Дополнительные курсы</h4>
                  <p className="text-gray-600">Skillbox, 2024</p>
                </div>
              </div>
              <p className="text-gray-700">Автотесты на Python, основы Python</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;