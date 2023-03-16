import Head from 'next/head'
import Image from 'next/legacy/image'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { AiFillLinkedin} from 'react-icons/ai'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react'

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
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className='text-xl font-burtons'>Zahra Talaei</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
              <li><a href="/public/pdf/CVZahraTalaei.pdf" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl drak:text-teal-400'>Zahra Talaei</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Web Developer</h3>
            <p className='text-md py-5 text-gray-800 leading-8 md:text-xl max-w-lg mx-auto dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque, commodi libero tempore nostrum molestiae sit facilis ab animi asperiores!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href="https://www.linkedin.com/feed/"><AiFillLinkedin/></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96" >
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
            <p className='text-md py-5 text-gray-80 leading-8 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis obcaecati temporibus pariatur cumque eaque necessitatibus est alias, inventore neque molestias.
            <span className="text-teal-500"> agencies </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptates.<span className="text-teal-500"> agencies </span>Lorem ipsum dolor sit amet.
            </p>
            <p className='text-md py-5 text-gray-80 leading-8 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, in.</p>
          </div>
          <div className='md:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={design} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful design</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, beatae? Hic corrupti vitae ab ipsum. Delectus ea harum voluptatum itaque.</p>
              <h4 className='text-teal-600 py-4'>design tools I used</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>css</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful design</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, beatae? Hic corrupti vitae ab ipsum. Delectus ea harum voluptatum itaque.</p>
              <h4 className='text-teal-600 py-4'>design tools I used</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>css</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful design</h3>
              <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, beatae? Hic corrupti vitae ab ipsum. Delectus ea harum voluptatum itaque.</p>
              <h4 className='text-teal-600 py-4'>design tools I used</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>css</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-5 text-gray-80 leading-8 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis obcaecati temporibus pariatur cumque eaque necessitatibus est alias, inventore neque molestias.
            <span className="text-teal-500"> agencies </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, voluptates.<span className="text-teal-500"> agencies </span>Lorem ipsum dolor sit amet.
            </p>
            <p className='text-md py-5 text-gray-80 leading-8 dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, in.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' src={web2}/></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' src={web3}/></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' src={web1}/></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' src={web4}/></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' src={web5}/></div>
            <div className='basis-1/3 flex-1'><Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' src={web6}/></div>
          </div>
        </section>
      </main>
      </div>
    
  )
}
