import Head from 'next/head'

import { Inter } from 'next/font/google'

import { useContext, useEffect, useState } from 'react'
import About from '@/components/About'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills';
import ContactMe from '@/components/ContactMe';
import { PageContext } from '@/hooks/PageContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[darkMode,setDarkMode] = useState(false)
  const[isTopOfPage,setIsTopOfPage] = useState(true)
  const { setSelectedPage} = useContext(PageContext)
  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage('home')
      }
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Zahra Talaei Portfolio</title>
        <meta name="description" content="Zahra Talaei portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <script src="../node_modules/flowbite/dist/flowbite.js"></script>

      </Head>
      <main className='bg-white dark:bg-gray-900' >
        <Nav setDarkMode={setDarkMode} darkMode={darkMode} isTopOfPage={isTopOfPage}/>
        <About />
        <Projects/>
        <Skills/>
        <ContactMe/>
       
      </main>
      </div>
    
  )
}
