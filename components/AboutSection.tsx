import { Users, Award, Heart } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-gradient-to-b from-primary-900 to-primary-800">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <Users className="w-16 h-16 text-primary-300 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            La Maratón de Teatro
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-primary-100">Nuestra Compañía</h3>
            <p className="text-lg leading-relaxed text-primary-50 mb-6">
              Somos una compañía de teatro dedicada a llevar historias mágicas y emocionantes 
              a familias de todas las edades. Con años de experiencia en el arte escénico, 
              nos especializamos en adaptaciones creativas de cuentos clásicos que cautivan 
              tanto a niños como a adultos.
            </p>
            <p className="text-lg leading-relaxed text-primary-50">
              Nuestra misión es crear momentos inolvidables a través del teatro, combinando 
              actuación, música y juegos escénicos interactivos que hacen que cada función 
              sea única y especial.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="animate-on-scroll bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Experiencia</h4>
                  <p className="text-primary-100">
                    Años de trayectoria en teatro familiar y obras infantiles
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Pasión</h4>
                  <p className="text-primary-100">
                    Dedicados a crear experiencias teatrales inolvidables
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Compromiso</h4>
                  <p className="text-primary-100">
                    Cada función es única, con interacción y juego escénico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
