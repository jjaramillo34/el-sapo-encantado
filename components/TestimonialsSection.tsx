import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María González',
    role: 'Madre de familia',
    content: 'Mis hijos quedaron encantados con la obra. La interacción y el humor los mantuvieron atentos durante toda la función. ¡Altamente recomendable!',
    rating: 5,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Profesor',
    content: 'Llevamos a nuestros estudiantes y fue una experiencia maravillosa. La adaptación es creativa y educativa. Los niños aprendieron mientras se divertían.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Abuela',
    content: 'Nunca había visto una adaptación tan divertida del cuento clásico. Toda la familia disfrutó, desde los más pequeños hasta los adultos. Excelente trabajo.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary-800 to-primary-700">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <Quote className="w-16 h-16 text-primary-300 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Lo Que Dicen Nuestros Espectadores
          </h2>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Experiencias reales de familias que han disfrutado nuestra obra
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300"
              style={{ opacity: 0 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary-400 mb-4 opacity-50" />
              <p className="text-primary-50 mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-bold text-primary-100">{testimonial.name}</p>
                <p className="text-sm text-primary-300">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
