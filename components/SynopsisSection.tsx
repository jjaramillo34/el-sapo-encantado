import { Theater } from 'lucide-react'

export function SynopsisSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary-800 to-primary-700">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll text-center mb-12">
          <Theater className="w-16 h-16 text-primary-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Sinopsis
          </h2>
        </div>
        <div className="animate-on-scroll bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
          <p className="text-lg md:text-xl leading-relaxed text-primary-50 mb-6">
            Es una adaptación libre del cuento clásico &quot;El Príncipe Rana&quot; de los hermanos Grimm. 
            Trata de la vida de una princesa malcriada que quería todas las atenciones de su padre viudo, 
            el Rey para calmar su mal humor le obsequió una bola de oro, la princesa de nariz de fresa 
            en un descuido deja caer su preciado tesoro al pozo (la verdad es que el narrador es el que 
            arroja la bola como rechazo a su insoportable comportamiento) La princesa desconsolada se 
            sienta a llorar hasta que aparece un sapo extranjero para ayudarla; el acuerdo es que el 
            sapo rescataría la bola de oro a cambio de un beso...
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-primary-50">
            A partir de este momento surgen acciones dramáticas impredecibles que rompen con la 
            estructura del cuento clásico, generando un juego escénico rico e interactivo que colmará 
            a los espectadores de gratos momentos lúdicos.
          </p>
        </div>
      </div>
    </section>
  )
}
