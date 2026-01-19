'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Cuál es la duración de la obra?',
    answer: 'La obra tiene una duración de 45 minutos, perfecta para mantener la atención de toda la familia.',
  },
  {
    question: '¿Para qué edades es apropiada?',
    answer: 'Es una obra familiar, adecuada para todas las edades. Los niños pueden disfrutarla desde los 3 años en adelante, y los adultos también se divierten con el humor y las situaciones cómicas.',
  },
  {
    question: '¿Cómo puedo reservar entradas?',
    answer: 'Puedes contactarnos por teléfono al 0987646738 o 0979287500, o enviarnos un correo a giovannyrubio@yahoo.es o lamaratondeteatro@gmail.com para más información sobre disponibilidad y precios.',
  },
  {
    question: '¿La obra es interactiva?',
    answer: '¡Sí! La obra incluye momentos interactivos y juegos escénicos que hacen que cada función sea única. Los espectadores pueden participar de manera activa en algunas escenas.',
  },
  {
    question: '¿Dónde se presenta la obra?',
    answer: 'Para conocer las fechas y lugares de presentación, por favor contáctanos directamente. Organizamos funciones en diferentes espacios y también podemos llevar la obra a tu institución o evento.',
  },
  {
    question: '¿Qué hace diferente a esta adaptación?',
    answer: 'Esta es una adaptación libre que rompe con la estructura clásica del cuento original, creando situaciones dramáticas impredecibles y momentos lúdicos que sorprenden tanto a niños como adultos.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-primary-900 to-primary-800">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <HelpCircle className="w-16 h-16 text-primary-300 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre la obra
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/15"
              style={{ opacity: 0 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg md:text-xl font-semibold text-primary-100 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-primary-300 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-primary-200 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
