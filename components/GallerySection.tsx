import { Images } from 'lucide-react'
import { Gallery } from './Gallery'

export function GallerySection() {
  return (
    <section id="galeria" className="py-20 px-4 bg-gradient-to-b from-primary-900 to-primary-800">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll text-center mb-16">
          <Images className="w-16 h-16 text-primary-300 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Galería
          </h2>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Momentos especiales de nuestra obra
          </p>
        </div>
        <Gallery />
      </div>
    </section>
  )
}
