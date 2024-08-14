import Intro from '@/components/intro'
import Footer from '@/components/footer'
import SectionDivider from '@/components/section-divider'
import About from '@/components/about'
import Image from 'next/image'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-custom-image bg-cover bg-center">
        <Intro />
      </main>
      <Footer />
    </div>
  )
}
