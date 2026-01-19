'use client'

import { HeroSection } from '@/components/HeroSection'
import { GallerySection } from '@/components/GallerySection'
import { SynopsisSection } from '@/components/SynopsisSection'
import { DetailsSection } from '@/components/DetailsSection'
import { AboutSection } from '@/components/AboutSection'
import { CastSection } from '@/components/CastSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { FAQSection } from '@/components/FAQSection'
import { SocialMediaSection } from '@/components/SocialMediaSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ScrollToTop } from '@/components/ScrollToTop'
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
      <CastSection />
      <TestimonialsSection />
      <FAQSection />
      <SocialMediaSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
