import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {CgDarkMode} from 'react-icons/cg'
import { AiFillLinkedin} from 'react-icons/ai'
import {DiGithubFull} from 'react-icons/di'
const Nav = ({setDarkMode,darkMode}) => {
  return (
    <div>
      <nav className="py-10 mb-2 flex justify-between dark:text-white">
        <h1 className='text-2xl font-burtons'>Zahra Talaei</h1>
        <ul className='flex items-center'>
          <li><CgDarkMode onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
          <li><a href="https://drive.google.com/file/d/1ehbxrfU1B-BBgsaTQdvi6VepMoV6KE81/view?usp=sharing" target="_blank" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'>Resume</a></li>
          
          <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
            <a href="https://www.linkedin.com/in/zahra-talaei-2582069b/"><AiFillLinkedin/></a>
          </li>
          <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
            <a href="https://github.com/zahratalaei"><DiGithubFull/></a>
          </li>
          </ul>
        </nav>
    </div>
  )
}

export default Nav