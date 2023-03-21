import React from 'react'
import yhl from '../public/yhl.png'
import lfl from '../public/lfl.png'
import jumbo from '../public/Jumbo.png'
import Rtmdb from '../public/ReactTMDB.png'
import FS from '../public/FullStack.png'
import Image from 'next/legacy/image'

const Projects = () => {
  return (
    <section>
      <h2 className='text-5xl text-gray-800 py-1 dark:text-white font-bold'>Sample Projects</h2>  
        <div className='md:grid md:grid-cols-2 gap-10'>
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
        <h3 className='text-2xl font-semibold pt-8 pb-2'>Codes Up!</h3>
        </a>
        <p className='py-2'>It is a Full Stack Blog App. Being able to see, add comments and likes the posts you need to have an account and sing in to the app. Only author of the post can edit/delete it. </p>
        <p className='text-gray-800 py-1 mt-4'><span className='text-teal-600 py-4 font-bold'>Used Technologies: </span>React, JavaScript, React router dom, react-bootstrap, yup, bootstrap, axios, Mui, ExpressJs, bcrypt, JWT, mysql, sequelize, ... </p>
      </div>
    </div>
 </section>
  )
}

export default Projects