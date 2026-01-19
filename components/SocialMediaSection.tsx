import { Facebook, Instagram, Youtube, Share2, MessageCircle } from 'lucide-react'

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: '#',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#',
    color: 'hover:text-pink-400',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: '#',
    color: 'hover:text-red-400',
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/593987646738',
    color: 'hover:text-green-400',
  },
]

export function SocialMediaSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-primary-800 to-primary-900">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll text-center mb-12">
          <Share2 className="w-12 h-12 text-primary-300 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
            Síguenos
          </h2>
          <p className="text-lg text-primary-200">
            Mantente al día con nuestras presentaciones y novedades
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group animate-on-scroll bg-white/10 backdrop-blur-md rounded-xl p-6 w-24 h-24 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-white/20 ${social.color}`}
                style={{ opacity: 0 }}
              >
                <Icon className="w-8 h-8 mb-2 text-white group-hover:scale-110 transition-transform" />
                <span className="text-xs text-primary-200 font-medium">{social.name}</span>
              </a>
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-primary-300 text-sm">
            Comparte esta obra con tus amigos y familia
          </p>
        </div>
      </div>
    </section>
  )
}
