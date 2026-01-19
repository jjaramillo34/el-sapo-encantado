import { Clock, Users, Drama, Star } from 'lucide-react'

export function DetailsSection() {
  const details = [
    {
      icon: Clock,
      title: 'Duración',
      value: '45 minutos',
      gradient: 'from-primary-600 to-primary-800',
    },
    {
      icon: Users,
      title: 'Público',
      value: 'Familiar',
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      icon: Drama,
      title: 'Género',
      value: 'Farsa / Comedia',
      gradient: 'from-primary-600 to-primary-800',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary-700 to-primary-800">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Detalles de la Obra
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => {
            const Icon = detail.icon
            return (
              <div
                key={index}
                className={`animate-on-scroll bg-gradient-to-br ${detail.gradient} rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300`}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-2">{detail.title}</h3>
                <p className="text-xl">{detail.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
