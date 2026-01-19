'use client'

import { HeroSection } from '@/components/HeroSection'
import { GallerySection } from '@/components/GallerySection'
import { SynopsisSection } from '@/components/SynopsisSection'
import { DetailsSection } from '@/components/DetailsSection'
import { AboutSection } from '@/components/AboutSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { FAQSection } from '@/components/FAQSection'
import { SocialMediaSection } from '@/components/SocialMediaSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { useScrollAnimation } from '@/components/ScrollAnimation'

export default function Home() {
  useScrollAnimation()

  return (
    <main className="min-h-screen">
      <HeroSection />
      <GallerySection />
      <SynopsisSection />
      <DetailsSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <SocialMediaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
