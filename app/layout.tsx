import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'El Sapo Encantado... De Conocerla',
  description: 'Una adaptación libre del cuento clásico "El Príncipe Rana" de los hermanos Grimm. Farsa / Comedia familiar.',
  metadataBase: new URL('https://elsoencantado.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/logo.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'El Sapo Encantado... De Conocerla',
    description: 'Una adaptación libre del cuento clásico "El Príncipe Rana" de los hermanos Grimm. Farsa / Comedia familiar.',
    images: '/logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Sapo Encantado... De Conocerla',
    description: 'Una adaptación libre del cuento clásico "El Príncipe Rana" de los hermanos Grimm. Farsa / Comedia familiar.',
    images: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
