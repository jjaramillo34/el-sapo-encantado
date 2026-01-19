import { Users, Award, User } from 'lucide-react'

const castMembers = [
  {
    name: 'Marcelo Chelo Dávila',
    role: 'Actor',
    description: 'Actor principal en la obra',
  },
  {
    name: 'Geovanny Pochi Rubio',
    role: 'Actor',
    description: 'Actor principal en la obra',
  },
  {
    name: 'María Gómez',
    role: 'Actriz',
    description: 'Actriz principal en la obra',
  },
]

export function CastSection() {
  return (
    <section id="actores" className="py-20 px-4 bg-gradient-to-b from-primary-700 to-primary-800">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <Users className="w-16 h-16 text-primary-300 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Elenco
          </h2>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Conoce a los talentosos actores que dan vida a esta increíble historia
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {castMembers.map((member, index) => (
            <div
              key={index}
              className="animate-on-scroll bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-xl"
              style={{ opacity: 0 }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-primary-100">
                {member.name}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary-300" />
                <p className="text-primary-300 font-medium">{member.role}</p>
              </div>
              <p className="text-primary-200 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-primary-200 text-lg">
            Un elenco talentoso que trae magia y emoción al escenario
          </p>
        </div>
      </div>
    </section>
  )
}
