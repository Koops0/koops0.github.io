import type { Metadata } from 'next'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import './globals.css'
import RootLayout from './RootLayout.client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Kersh's Portfolio",
  description: 'WELCOME TO MY PORTFOLIO',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px]`}>
        <RootLayout>
          <Header />
          {children}
        </RootLayout>
      </body>
    </html>
  );
}