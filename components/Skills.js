import React, { useContext } from 'react'
import {motion} from 'framer-motion'
import { PageContext } from '@/hooks/PageContext'
const Skills = () => {
  const {setSelectedPage} = useContext(PageContext)
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const childVariant={
    hidden:{opacity:0, scale:0.9},
    visible:{opacity:1, scale:1}
  }
  return (
    <section id='skills' className="mx-auto min-h-full w-5/6 pt-40">
      <motion.div onViewportEnter={()=>setSelectedPage("skills")}>
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className='text-5xl text-gray-800 py-1 dark:text-white font-bold'>Skills</h2>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-3 flex flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* <motion.div 
            variants={childVariant}
            className="mt-5 flex flex-wrap rounded-md border-2 border-black px-5 py-16 text-center"
          >
            
         </motion.div> */}
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>ReactJs</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>NextJs</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>React Router Dom</motion.div>
            
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Rest API</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>GraphQL API</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Bootstrap</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>MUI</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Tailwind</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Typescript</motion.div>
          
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>NodeJs</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>ExpressJs</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>CesiumJs</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Styled Components</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>MySQL</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>PostgreSQL</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>sequedivze</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>PHP</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>CodeIgniter</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Symfony</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>WordPress</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Strapi</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Webflow</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Adalo</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Docker</motion.div>
            <motion.div 
            variants={childVariant} className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Github</motion.div>
        </motion.div>
      </motion.div>

     

    </section>
  )
}

export default Skills

{/* <ul className='flex flex-wrap gap-1 m-6'>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>JavaScript</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>React Router Dom</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>ReactJs</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Rest API</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>GraphQL API</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Bootstrap</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>MUI</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Tailwind</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Typescript</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>NextJs</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>NodeJs</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>ExpressJs</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Styled Components</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>MySQL</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>PostgreSQL</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>sequelize</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>PHP</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>CodeIgniter</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Symfony</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>WordPress</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Strapi</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Webflow</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Adalo</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Docker</li>
          <li className='bg-teal-400 m-1 rounded p-1 text-lg dark:text-white'>Github</li> 
     </ul>
        
        */}