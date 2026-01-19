'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import anime from 'animejs'
import { Clock, Users, Drama, Sparkles, Phone } from 'lucide-react'
import { AnimatedClouds } from './AnimatedClouds'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const sparkleRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Logo animation
    if (logoRef.current) {
      anime({
        targets: logoRef.current,
        opacity: [0, 1],
        scale: [0.8, 1],
        rotate: [-10, 0],
        duration: 2000,
        easing: 'easeOutElastic(1, .6)',
      })
      
      // Continuous gentle floating animation
      anime({
        targets: logoRef.current.querySelector('div'),
        translateY: [
          { value: -10, duration: 3000 },
          { value: 0, duration: 3000 }
        ],
        easing: 'easeInOutSine',
        loop: true,
      })
    }

    // Hero animation
    if (titleRef.current && subtitleRef.current) {
      anime({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1500,
        delay: 400,
        easing: 'easeOutExpo',
      })

      anime({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1500,
        delay: 700,
        easing: 'easeOutExpo',
      })
    }

    // Floating sparkles animation
    sparkleRefs.current.forEach((ref, index) => {
      if (ref) {
        anime({
          targets: ref,
          translateY: [
            { value: -20, duration: 2000 },
            { value: 0, duration: 2000 }
          ],
          opacity: [
            { value: 0.3, duration: 2000 },
            { value: 1, duration: 2000 }
          ],
          rotate: 360,
          duration: 4000,
          delay: index * 200,
          easing: 'easeInOutSine',
          loop: true,
        })
      }
    })

    // Parallax scroll animation
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = heroRef.current?.querySelector('.parallax-bg')
      if (parallax) {
        anime({
          targets: parallax,
          translateY: scrolled * 0.5,
          easing: 'linear',
          duration: 0,
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <AnimatedClouds />
        
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (sparkleRefs.current.length < 20) {
                  sparkleRefs.current.push(el)
                }
              }}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div 
          ref={logoRef}
          className="mb-8 flex justify-center"
          style={{ opacity: 0 }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float">
            <Image
              src="/logo.png"
              alt="El Sapo Encantado - Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
        </div>
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 text-shadow-lg"
          style={{ opacity: 0 }}
        >
          El Sapo Encantado
          <span className="block text-3xl md:text-5xl mt-4 text-primary-200">
            ...De Conocerla
          </span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto text-shadow"
          style={{ opacity: 0 }}
        >
          Una adaptación libre del cuento clásico &quot;El Príncipe Rana&quot; 
          de los hermanos Grimm
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
            <Clock className="w-5 h-5 text-primary-300" />
            <span>45 minutos</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
            <Users className="w-5 h-5 text-primary-300" />
            <span>Público Familiar</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
            <Drama className="w-5 h-5 text-primary-300" />
            <span>Farsa / Comedia</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="#contactos"
            className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Reservar Entradas
            </span>
          </a>
          <a
            href="#galeria"
            className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
          >
            Ver Galería
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
