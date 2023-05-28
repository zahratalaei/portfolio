import React, { useContext } from 'react'
import Image from 'next/legacy/image'
import devZ from '../public/zavator.jpg'
import {motion} from 'framer-motion'
import { PageContext } from '@/hooks/PageContext'
const About = () => {
const {setSelectedPage} = useContext(PageContext)
  return (
    
     <section id='aboutme' className='gap-16 py-10 md:h-full md:pb-0'>
          <motion.div 
               className="lg:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
               onViewportEnter={() => setSelectedPage('aboutme')}
          >
               <div className="z-10 mt-32 md:basis-3/5">
                    <motion.div 
                         className="md:mt-20"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{once:true, amount:0.5}}
                         transition={{duration:0.5}}
                         variants={{
                              hidden:{opacity:0, x:-50},
                              visible:{opacity:1, x:0}
                         }}
                    >
                         <h2 className='text-4xl py-2 text-teal-600 font-medium md:text-4xl dark:text-teal-400'>Zahra Talaei</h2>
                         <h3 className='text-2xl py-2 md:text-2xl dark:text-white'>Web Developer</h3>
                         <p className='text-md py-5 text-gray-800 leading-8 md:text-xl md:px-2 max-w-3xl  dark:text-gray-200 tracking-wide '>An efficient web developer with four years relevant local experience, strong collaboration skills, a keen eye for 
                         detail and a quick learner. With a background in theoretical physics (mostly computational Physics) which has made her enjoy 
                         solving problems and handling challenging tasks. Skilled in both individual and team projects. Having worked in multiple 
                         environments has benefited her with Strong communication and soft skills and experience. Australian Citizen residing in 
                         Brisbane.
                         </p>
                    </motion.div>
               </div>
               <div className="relative mx-auto flex basic-2/5 justify-center md:z-10 md:mt-20 lg:justify-items-end rounded-full w-80 h-80 overflow-hidden md:h-65 md:w-65 md:shrink-0">
                    <Image src={devZ} layout='fill' objectFit='cover' className=' ml-40 mr-40' alt='' />
               </div>
          </motion.div>
     </section>

  )
}

export default About