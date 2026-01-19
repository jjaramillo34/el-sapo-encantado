'use client'

import { MessageCircle } from 'lucide-react'

const whatsappNumber = '0999052662'
const whatsappMessage = 'Hola, me gustaría obtener más información sobre la obra El Sapo Encantado... De Conocerla'

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/593${whatsappNumber.replace(/^0/, '')}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Contactar por WhatsApp</span>
    </a>
  )
}
