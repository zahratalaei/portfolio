import Head from 'next/head'

import { Inter } from 'next/font/google'

import { useState } from 'react'
import About from '@/components/About'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills';
import ContactMe from '@/components/ContactMe';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[darkMode,setDarkMode] = useState(false)
  console.log(darkMode);
  return (
    
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Zahra Talaei Portfolio</title>
        <meta name="description" content="Zahra Talaei portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px:20 lg:px-40 dark:bg-gray-900' >
        <Nav setDarkMode={setDarkMode} darkMode={darkMode}/>
        <About />
        <Projects/>
        <Skills/>
        <ContactMe/>
       
      </main>
      </div>
    
  )
}
