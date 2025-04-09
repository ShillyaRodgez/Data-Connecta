import React, { useState, useEffect } from 'react'
import logo from '../assets/lg.svg'

// Lista de seções para monitorar
const sections = ['home', 'services', 'projects', 'about', 'contact']

/**
 * Componente Header - Barra de navegação principal do site
 * Inclui logo, links de navegação e botão de contato
 * Implementa funcionalidade de navegação responsiva para dispositivos móveis
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Controla a mudança de estilo do header e seção ativa ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      // Atualiza o estado do header
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Detecta a seção atual
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Alterna o estado do menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center text-2xl tracking-tight font-semibold text-primary font-heading">
          <img src={logo} alt="Data Connecta Logo" className="h-8 w-auto mr-2" />
          Data<span className="text-secondary font-medium">Connecta</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <a 
                href="#home" 
                className={`font-medium transition-colors duration-300 ${activeSection === 'home' ? 'text-primary' : 'hover:text-primary'}`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`font-medium transition-colors duration-300 ${activeSection === 'services' ? 'text-primary' : 'hover:text-primary'}`}
              >
                Serviços
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`font-medium transition-colors duration-300 ${activeSection === 'projects' ? 'text-primary' : 'hover:text-primary'}`}
              >
                Projetos
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`font-medium transition-colors duration-300 ${activeSection === 'about' ? 'text-primary' : 'hover:text-primary'}`}
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`btn ${activeSection === 'contact' ? 'btn-secondary' : 'btn-primary'}`}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão Menu Mobile */}
        <button 
          className="block md:hidden" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-6 h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 p-4 mt-2 bg-white shadow-lg top-full md:hidden">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#" 
                  className="block font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="block font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="block font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projetos
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block w-full text-center btn btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header