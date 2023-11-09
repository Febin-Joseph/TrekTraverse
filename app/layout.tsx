import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TrekTraverse',
  description: 'Your Passport to Adventure! Discover breathtaking destinations, plan seamless journeys, and connect with a global community of fellow explorers. Unleash your wanderlust and make every trip an unforgettable adventure with TrekTraverse.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
