import React,{useContext} from 'react'
import yhl from '../public/yhl.png'
import lfl from '../public/lfl.png'
import jumbo from '../public/Jumbo.png'
import Rtmdb from '../public/ReactTMDB.png'
import FS from '../public/CircleUp.png'
import Shopping from '../public/shopping.png'
import Image from 'next/legacy/image'
import {motion} from 'framer-motion'
import data from '../projects.json'
import { PageContext } from '@/hooks/PageContext'


const Projects = () => {
const {setSelectedPage} = useContext(PageContext)
const images = [jumbo,Rtmdb,yhl,FS,Shopping]
  const{projects} = data
  const overlayStyles = `p-5 absolute z-20 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-yellow-200 text-center text-black
  opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <section id='projects' className="w-full pt-40">
      <motion.div onViewportEnter={() => setSelectedPage("projects")}>
        <motion.div 
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h2 className='text-5xl text-gray-800 py-1 dark:text-white font-bold'>Sample Projects</h2> 
            <p className="py-5">Take a look at some of my recent projects! Scroll left to view the full list.</p>
          </div> 
        </motion.div>
        <div className="mt-10 h-[353px] mx-auto w-5/6 overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {projects.map((project)=>(
              <li className="relative mx-5 inline-block h-[380px] w-[450px] overflow-auto">
                <div className={overlayStyles}>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <div className='overflow-auto h-[70%]'>
                    <p className="mt-5">{project.description}</p>
                    <p><span className='text-teal-600 py-4 font-bold my-[10px]'>Used Technologies: </span>{project.technology}</p>
                    {project.url && 
                    <div className='mt-[10px]'>
                    <a href={project.url} target="_blank" className='bg-teal-400 text-white p-1 rounded-md'>website
                    </a>
                    </div>}
                  </div>
                </div>
                <Image src={`${images[project.id].src}`} layout="fill" alt={images[project.id].alt} className="object-cover"/>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
        
 </section>
  )
}

export default Projects
{/* <div className='md:grid md:grid-cols-2 gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <Image src={jumbo} alt=''/>
            <h3 className='text-2xl font-semibold pt-8 pb-2'>Jumbo Interactive</h3>
            <p className='py-2'>Maintaining and adding new components to the old version of Jumbo corporate website. Current website is the new version.</p>
            <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>Reactjs, Javascript, Styled Components, React router dom, Node API, Wordpress Rest Api, ...</p> 
          </div>
          
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
            <a href='https://tmdbmovieapplication.netlify.app/' target="_blank">
              <Image src={Rtmdb} alt=''/>
              <h3 className='text-2xl font-semibold pt-8 pb-2'>Search Movies App</h3>
            </a>
        <p className='py-2'>Through this application you can find the latest popular movies in home page and search the movie by its name among all the movies in TMDB API. By click on each movie you have access to the details of it. You also be able to paginate through the different pages. All the data comes from TMDB API.</p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>React, JavaScript, React router dom,Rest API, react-paginate, Styled components</p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href="https://www.yourhospicelottery.org.uk/blog/" target='_blank'>
        <Image src={yhl} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>Your Hospice Lottery Blog</h3>
        </a>
        <p className='py-2'>This the blog of Your Hospice Lottery website. It is a Wordpress custom theme created from the scratch.</p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>Wordpress, PHP, bootstrap</p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href='https://github.com/zahratalaei/FullStackReactExpress' target="_blank">
        <Image src={FS} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>CircleUp!</h3>
        </a>
        <p className='py-2'>It is a Full Stack Blog App. Being able to see, add comments and likes the posts you need to have an account and sing in to the app. Only author of the post can edit/delete it. This app is in progressing to add more functionalities such as search bar, filters and also improve the UI  </p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>React, JavaScript, React router dom, react-bootstrap, yup, bootstrap, axios, Mui, ExpressJs, bcrypt, JWT, mysql, sequelize, ... </p>
      </div>
      
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <a href='https://main--shappingcart-ts-app.netlify.app/' target="_blank">
        <Image src={Shopping} alt=''/>
        <h3 className='text-2xl font-semibold pt-8 pb-2'>Shopping cart app!</h3>
        </a>
        <p className='py-2'>It is a shopping cart App which is created by react-typescript. Home page displays different categories. Each category is linked to its products page. This app includes a cart displaying all the selected products with the single price, total price of each item and the total price of cart. This app is in progressing to add more functionalities such as search bar, filters and also improve the UI </p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>React, typescript, React router dom, react-bootstrap, bootstrap5, axios </p>
      </div>
    </div> */}