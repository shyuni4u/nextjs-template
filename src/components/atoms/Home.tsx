'use client'

import type { Metadata } from 'next'
import { Footer } from '@/components/atoms/Footer'
import { Header } from '@/components/atoms/Header'

export const metadata: Metadata = {
  title: 'METADATA: Title',
  description: 'METADATA: Description',
  robots: 'noindex',
}

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8">
        Main
      </main>
      <Footer />
    </div>
  )
}
