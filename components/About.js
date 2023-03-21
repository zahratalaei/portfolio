import React from 'react'
import Image from 'next/legacy/image'
import devZ from '../public/zavator.jpg'
const About = () => {
  return (
    
     <section className="pb-20" id='about '>
          <div className='flex flex-col items-center md:flex-row md:items-center md:justify-center'>
              <div className='basis-1/4'>
                    <div className="relative rounded-full w-80 h-80 mt-20 overflow-hidden md:h-65 md:w-65 md:shrink-0" >
                    <Image src={devZ} layout='fill' objectFit='cover' className=' ml-40 mr-40' alt='' />
                    </div>
               </div>
               <div className='text-left ml-20 basis-1/2'>
                    <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-5xl dark:text-teal-400'>Zahra Talaei</h2>
                    <h3 className='text-2xl py-2 md:text-2xl dark:text-white'>Web Developer</h3>
                    <p className='text-md py-5 text-gray-800 leading-8 md:text-xl md:px-2 max-w-3xl mx-auto dark:text-gray-200 tracking-wide '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, eos animi blanditiis reiciendis esse cum aut recusandae laudantium rerum enim, sed tenetur asperiores totam at illo aliquam error, quibusdam accusantium vitae beatae dolor repudiandae aliquid vero non! Iusto, sint asperiores.
                    </p>
               </div>
          </div>
          
     </section>

  )
}

export default About