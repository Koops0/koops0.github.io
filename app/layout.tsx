import type { Metadata } from 'next'
import Header from '@/components/header'
import { Inter } from 'next/font/google'
import './globals.css'
import RootLayout from './RootLayout.client'
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Kersh's Portfolio",
  description: 'WELCOME TO MY PORTFOLIO',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
          <ActiveSectionContextProvider>
            <Header />
            <main className="flex-grow">{children}</main>

          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}