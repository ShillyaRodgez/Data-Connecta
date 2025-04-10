import React from 'react'

/**
 * Componente Hero - Seção principal da landing page
 * Apresenta o título principal, subtítulo e chamada para ação
 * Inclui uma imagem ilustrativa relacionada a dados e análises
 */
const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-light to-blue-50">
      <div className="container grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        {/* Conteúdo de texto */}
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Conectando <span className="text-primary"> você </span> ao que <span className="text-secondary"> importa </span>
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Especializada em análise de dados, dashboards inteligentes e desenvolvimento de software personalizado para impulsionar seu negócio.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-start justify-center">
            <a href="#services" className="btn btn-primary">
              Nossos Serviços
            </a>
            <a href="#contact" className="btn btn-outline">
              Fale Conosco
            </a>
          </div>
        </div>
        
        {/* Imagem ilustrativa */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg">
            {/* Elementos decorativos */}
            <div className="absolute w-40 h-40 bg-primary/10 rounded-full -top-10 -left-10 animate-pulse"></div>
            <div className="absolute w-32 h-32 bg-secondary/10 rounded-full -bottom-10 -right-10 animate-pulse delay-300"></div>
            
            {/* SVG ilustrativo */}
            <svg className="w-full h-auto" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="400" height="300" rx="20" fill="#f8f9fa" stroke="#0056b3" strokeWidth="2"/>
              <circle cx="120" cy="120" r="40" fill="#00a0e9" opacity="0.7"/>
              <circle cx="250" cy="150" r="60" fill="#0056b3" opacity="0.5"/>
              <circle cx="380" cy="180" r="30" fill="#ff6b6b" opacity="0.6"/>
              <path d="M80 250 L180 200 L280 280 L380 220" stroke="#0056b3" strokeWidth="3" fill="none"/>
              <path d="M80 300 L180 280 L280 220 L380 260" stroke="#00a0e9" strokeWidth="3" fill="none"/>
              <rect x="100" y="320" width="300" height="20" rx="5" fill="#0056b3" opacity="0.2"/>
              <rect x="100" y="320" width="200" height="20" rx="5" fill="#0056b3" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero