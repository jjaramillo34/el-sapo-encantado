import { Heart, Phone, Mail } from 'lucide-react'

const contactInfo = {
  phones: [
    { number: '0987646738', tel: '+593987646738' },
    { number: '0999052662', tel: '+593999052662' },
  ],
  emails: [
    { address: 'giovannyrubio@yahoo.es' },
    { address: 'lamaratondeteatro@gmail.com' },
  ],
}

export function ContactSection() {
  return (
    <section id="contactos" className="py-20 px-4 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <Heart className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Contactos
          </h2>
        </div>
        <div className="animate-on-scroll grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/15 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary-600 p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Teléfonos</h3>
            </div>
            <div className="space-y-2 text-lg">
              {contactInfo.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.tel}`}
                  className="block hover:text-primary-300 transition-colors"
                >
                  {phone.number}
                </a>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/15 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary-600 p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Correo Electrónico</h3>
            </div>
            <div className="space-y-2 text-lg">
              {contactInfo.emails.map((email, index) => (
                <a
                  key={index}
                  href={`mailto:${email.address}`}
                  className="block hover:text-primary-300 transition-colors break-all"
                >
                  {email.address}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
