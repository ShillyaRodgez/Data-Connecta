import React from 'react'

/**
 * Componente About - Seção Sobre Nós da landing page
 * Apresenta informações sobre a empresa, sua missão e valores
 * Inclui uma imagem ilustrativa e estatísticas relevantes
 */
const About = () => {
  // Dados das estatísticas da empresa
  const stats = [
    { id: 1, value: '14+', label: 'Anos de Experiência' },
    { id: 2, value: '50+', label: 'Projetos Entregues' },
    { id: 3, value: '30+', label: 'Clientes Satisfeitos' },
    { id: 4, value: '100%', label: 'Comprometimento' }
  ]

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Sobre Nós</h2>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Imagem ilustrativa */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Elementos decorativos */}
              <div className="absolute w-40 h-40 bg-primary/10 rounded-full -top-5 -left-5"></div>
              
              {/* SVG ilustrativo */}
              <svg className="relative w-full h-auto" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="60" width="380" height="280" rx="20" fill="white" stroke="#0056b3" strokeWidth="2"/>
                <circle cx="150" cy="150" r="50" fill="#0056b3" opacity="0.1"/>
                <circle cx="150" cy="150" r="30" fill="#0056b3" opacity="0.3"/>
                <circle cx="150" cy="150" r="15" fill="#0056b3"/>
                <circle cx="350" cy="150" r="50" fill="#00a0e9" opacity="0.1"/>
                <circle cx="350" cy="150" r="30" fill="#00a0e9" opacity="0.3"/>
                <circle cx="350" cy="150" r="15" fill="#00a0e9"/>
                <circle cx="250" cy="250" r="60" fill="#ff6b6b" opacity="0.1"/>
                <circle cx="250" cy="250" r="40" fill="#ff6b6b" opacity="0.3"/>
                <circle cx="250" cy="250" r="20" fill="#ff6b6b"/>
                <path d="M150 150 L250 250 L350 150" stroke="#333" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
              </svg>
            </div>
          </div>
          
          {/* Conteúdo de texto */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Conectando você ao que importa</h3>
            <p className="mb-4 text-gray-600">
              A Data Connecta nasceu da visão de que os dados são o ativo mais valioso das empresas modernas. 
              Nossa missão é ajudar organizações a extrair o máximo valor de seus dados, transformando-os em 
              insights acionáveis e soluções tecnológicas que impulsionam resultados reais.
            </p>
            <p className="mb-6 text-gray-600">
              Com uma equipe multidisciplinar de especialistas em análise de dados, desenvolvimento de software 
              e business intelligence, oferecemos soluções personalizadas que atendem às necessidades específicas 
              de cada cliente, independentemente do tamanho ou setor de atuação.
            </p>
            
            {/* Valores da empresa */}
            <div className="mb-8">
              <h4 className="mb-3 text-xl font-semibold">Nossos Valores</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600"><strong>Inovação:</strong> Buscamos constantemente novas tecnologias e abordagens.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600"><strong>Excelência:</strong> Comprometimento com a qualidade em tudo o que fazemos.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600"><strong>Colaboração:</strong> Trabalhamos em parceria com nossos clientes.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600"><strong>Integridade:</strong> Transparência e ética em todas as nossas relações.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="p-6 text-center bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-600 md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About