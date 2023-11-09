import type { Metadata } from 'next'
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
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}