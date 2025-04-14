import React from 'react'
import Dashboard from '../assets/Dashboard.png'

/**
 * Componente Projects - Seção de projetos realizados pela Data Connecta
 * Apresenta os principais projetos da empresa com imagens, descrições e tecnologias utilizadas
 * Organizado em cards para melhor visualização
 */
const Projects = () => {
  // Array com os dados dos projetos realizados
  const projectsList = [
    {
      id: 1,
      title: 'Dashboard Financeiro',
      description: 'Dashboard interativo para análise de indicadores financeiros, permitindo visualização de tendências e tomada de decisões estratégicas.',
      image: Dashboard,
      technologies: ['GCP', 'Pyton', 'MongoDB', 'PHP', 'Metabase'],
    },
    {
      id: 2,
      title: 'Sistema de Gestão de Dados',
      description: 'Plataforma completa para integração, processamento e visualização de dados empresariais, com módulos personalizados para diferentes departamentos.',
      image: 'https://via.placeholder.com/600x400?text=Sistema+de+Gestão',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
    },
    {
      id: 3,
      title: 'Aplicativo de Análise Preditiva',
      description: 'Solução de análise preditiva que utiliza machine learning para prever tendências de mercado e comportamento de consumidores.',
      image: 'https://via.placeholder.com/600x400?text=Análise+Preditiva',
      technologies: ['Python', 'TensorFlow', 'Flask', 'AWS'],
    },
    {
      id: 4,
      title: 'Portal de Business Intelligence',
      description: 'Portal centralizado de BI com relatórios personalizados, dashboards interativos e ferramentas de análise para diferentes níveis gerenciais.',
      image: 'https://via.placeholder.com/600x400?text=Portal+BI',
      technologies: ['React', 'Power BI', 'SQL Server', 'Azure'],
    },
  ]

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Nossos Projetos</h2>
        <p className="section-subtitle">
          Conheça alguns dos projetos que desenvolvemos, sempre conectando você ao que importa.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-primary/20"
            >
              <div className="overflow-hidden h-55">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects