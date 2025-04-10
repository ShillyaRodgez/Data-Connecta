import React from 'react'

/**
 * Componente Footer - Rodapé da landing page
 * Contém informações de contato, links úteis e direitos autorais
 */
const Footer = () => {
  // Ano atual para o copyright
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-16 pb-8 text-white bg-dark">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          {/* Logo e descrição */}
          <div>
            <a href="#" className="inline-block mb-4 text-2xl font-bold">
              Data<span className="text-secondary">Connecta</span>
            </a>
            <p className="mb-4 text-gray-300">
              Conectando você ao que importa para impulsionar o desenvolvimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              {/* Ícones de redes sociais */}
              <a href="#" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Serviços</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white">Projetos</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">Sobre Nós</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">Contato</a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Dashboards Interativos</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Análise de Dados</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Relatórios Personalizados</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Desenvolvimento de Software</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Integração de Sistemas</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Consultoria em BI</a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <ul className="space-y-2">
              {/*<li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Av. Paulista, 1000, São Paulo - SP</span>
              </li>*/}
              {/*<li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">(11) 3456-7890</span>
              </li>*/}
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">contato@dataconnecta.com.br</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="h-px bg-gray-700"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between pt-8 md:flex-row">
          <p className="mb-4 text-sm text-gray-400 md:mb-0">
            &copy; {currentYear} Data Connecta. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Termos de Uso</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Política de Privacidade</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer