'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import anime from 'animejs'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  '/images/image1.jpeg',
  '/images/image2.jpeg',
  '/images/image3.jpeg',
  '/images/image4.jpeg',
  '/images/image5.jpeg',
  '/images/image6.jpeg',
  '/images/image7.jpeg',
  '/images/image8.jpeg',
  '/images/image12.jpeg',
  '/images/image9.jpeg',
  '/images/image10.jpeg',
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const images = galleryRef.current?.querySelectorAll('.gallery-item')
    if (images) {
      images.forEach((img, index) => {
        anime({
          targets: img,
          opacity: [0, 1],
          scale: [0.8, 1],
          delay: index * 100,
          duration: 600,
          easing: 'easeOutExpo',
        })
      })
    }
  }, [])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
        document.body.style.overflow = 'unset'
      }
      if (e.key === 'ArrowRight') {
        setSelectedImage((selectedImage + 1) % galleryImages.length)
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <div 
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
      >
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="gallery-item group relative aspect-square overflow-hidden rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
            onClick={() => openLightbox(index)}
            style={{ opacity: 0 }}
          >
            <Image
              src={src}
              alt={`Galería imagen ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium">Imagen {index + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 text-white hover:text-primary-400 transition-colors z-10 bg-black/50 p-2 rounded-full"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 text-white hover:text-primary-400 transition-colors z-10 bg-black/50 p-2 rounded-full"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage]}
              alt={`Galería imagen ${selectedImage + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  )
}
