import React from 'react'
import Dashboard from '../assets/Dashboard.png'
import Business from '../assets/Business.png'
import SistemaERP from '../assets/Sistema ERP.png'
import AgenteIA from '../assets/Agente IA.png'

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
      technologies: ['GCP', 'Python', 'MongoDB', 'PHP', 'Metabase'],
    },
    {
      id: 2,
      title: 'Sistema ERP (Enterprise Resource Planning)',
      description: 'Um sistema ERP (Enterprise Resource Planning) integra e automatiza os processos principais de uma empresa em um único software.',
      image: SistemaERP,
      technologies: ['React', 'Python', 'PHP', 'Laravel'],
    },
    {
      id: 3,
      title: 'Agente IA',
      description: 'O Agende IA é uma ferramenta inteligente para agendamentos automatizados, otimizando o tempo e a organização de compromissos.',
      image: AgenteIA,
      technologies: ['React', 'Python', 'PHP', 'langchain', 'BigQuery'],
    },
    {
      id: 4,
      title: 'Portal de Business Intelligence',
      description: 'Portal centralizado de BI com relatórios personalizados, dashboards interativos e ferramentas de análise para diferentes níveis gerenciais.',
      image: Business,
      technologies: ['GCP', 'React', 'Python', 'Power BI', 'PHP', 'Metabase'],
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
              <div className="overflow-hidden h-[400px]">
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