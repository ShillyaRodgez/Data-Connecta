import React from 'react'
import { useForm } from 'react-hook-form'

/**
 * Componente Contact - Formulário de contato da landing page
 * Implementa validação de campos usando react-hook-form
 * Inclui feedback visual para erros de validação
 */
const Contact = () => {
  // Configuração do react-hook-form para validação do formulário
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm()

  // Função para lidar com o envio do formulário
  const onSubmit = (data) => {
    // Simulação de envio de dados para um backend
    console.log('Dados do formulário:', data)
    
    // Em uma implementação real, aqui seria feita uma chamada para uma API
    // Exemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    
    // Feedback para o usuário
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.')
    
    // Limpa o formulário após envio
    reset()
  }

  return (
    <section id="contact" className="section bg-white">
      <div className="container max-w-5xl">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Estamos prontos para ajudar sua empresa a transformar dados em resultados. 
          Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
        </p>

        <div className="p-6 bg-white rounded-lg shadow-md md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Nome Completo <span className="required-mark">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Seu nome completo"
                  {...register('name', { 
                    required: 'Nome é obrigatório',
                    minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } 
                  })}
                />
                {errors.name && (
                  <p className="error-message">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email <span className="required-mark">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="seu.email@exemplo.com"
                  {...register('email', { 
                    required: 'Email é obrigatório',
                    pattern: { 
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Endereço de email inválido' 
                    } 
                  })}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>

              {/* Empresa */}
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
                  Empresa
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nome da sua empresa"
                  {...register('company')}
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  Telefone <span className="required-mark">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="(00) 00000-0000"
                  {...register('phone', { 
                    required: 'Telefone é obrigatório',
                    pattern: { 
                      value: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
                      message: 'Formato de telefone inválido' 
                    } 
                  })}
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Assunto */}
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                Assunto <span className="required-mark">*</span>
              </label>
              <select
                id="subject"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                {...register('subject', { required: 'Selecione um assunto' })}
                defaultValue=""
              >
                <option value="" disabled>Selecione uma opção</option>
                <option value="dashboards">Dashboards e Visualização de Dados</option>
                <option value="analytics">Análise de Dados</option>
                <option value="software">Desenvolvimento de Software</option>
                <option value="integration">Integração de Sistemas</option>
                <option value="consulting">Consultoria</option>
                <option value="other">Outro Assunto</option>
              </select>
              {errors.subject && (
                <p className="error-message">{errors.subject.message}</p>
              )}
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Mensagem <span className="required-mark">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Descreva como podemos ajudar você"
                {...register('message', { 
                  required: 'Mensagem é obrigatória',
                  minLength: { value: 10, message: 'Mensagem deve ter pelo menos 10 caracteres' } 
                })}
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message.message}</p>
              )}
            </div>

            {/* Política de Privacidade */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacy"
                  type="checkbox"
                  className={`w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-primary ${errors.privacy ? 'border-red-500' : ''}`}
                  {...register('privacy', { required: 'Você precisa concordar com a política de privacidade' })}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="font-medium text-gray-700">
                  Concordo com a <a href="#" className="text-primary hover:underline">Política de Privacidade</a> <span className="required-mark">*</span>
                </label>
                {errors.privacy && (
                  <p className="error-message">{errors.privacy.message}</p>
                )}
              </div>
            </div>

            {/* Botão de Envio */}
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="px-6 py-3 text-white transition-all duration-300 rounded-md bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact