import React, { useState } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {CgDarkMode} from 'react-icons/cg'
import { AiFillLinkedin,AiFillCloseCircle} from 'react-icons/ai'
import {DiGithubFull} from 'react-icons/di'
import { Tooltip } from 'flowbite-react'
import useMediaQuery from '@/hooks/useMediaQuery'
import LinkNav from './LinkNav'
import {FaBars} from 'react-icons/fa'
const Nav = ({setDarkMode,darkMode,isTopOfPage}) => {
  const isDesktopScreen = useMediaQuery('(min-width:768px)')
  const flexBetween = "flex items-center justify-between"
  const [menuOpen, setMenuOpen] = useState('false')
  const navbarBg = isTopOfPage ? "":"bg-yellow-300"
  console.log(isDesktopScreen);
  console.log(menuOpen);
  return (    
    // <nav className="py-10 mb-2 flex justify-between dark:text-white sticky">
    <nav>
      {/* <h1 className='text-2xl font-burtons'>Zahra Talaei</h1> */}
      <div className={`${navbarBg} ${flexBetween} fixed top-0 z-30 w-full py-6 `} >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            
            {isDesktopScreen ?(
              <div className={`${flexBetween} w-full whitespace-nowrap`}>
                <div className={`${flexBetween} gap-8 text-md `}>
                  <LinkNav page="About Me"/>
                  <LinkNav page="Projects"/>
                  <LinkNav page="Skills"/>
                  <LinkNav page="Contact Me"/>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <ul className='flex items-center'>
                    <li><a href="https://drive.google.com/file/d/1_Jz9VxRxdI504XN8Om5xWYE6Et4FJ_PL/view?usp=sharing" target="_blank" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'>Resume</a></li>
                    
                    <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                      <a href="https://www.linkedin.com/in/zahra-talaei-2582069b/"><AiFillLinkedin/></a>
                    </li>
                    <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                      <a href="https://github.com/zahratalaei"><DiGithubFull/></a>
                    </li>
                    
                    <li className='ml-2'>
                      <Tooltip content={darkMode?"Light Mode":"Dark Mode"} className='whitespace-nowrap' >
                        <CgDarkMode onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-4xl'/>
                      </Tooltip>
                    </li>
                  </ul>
                </div>
              </div>
              ):(
                <>
                <div className={`${flexBetween} gap-8`}>
                  <ul className='flex items-center'>
                    <li><a href="https://drive.google.com/file/d/1_Jz9VxRxdI504XN8Om5xWYE6Et4FJ_PL/view?usp=sharing" target="_blank" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'>Resume</a></li>
                    
                    <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                      <a href="https://www.linkedin.com/in/zahra-talaei-2582069b/"><AiFillLinkedin/></a>
                    </li>
                    <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                      <a href="https://github.com/zahratalaei"><DiGithubFull/></a>
                    </li>
                    
                    <li className='ml-2'>
                      <Tooltip content={darkMode?"Light Mode":"Dark Mode"} className='whitespace-nowrap' >
                        <CgDarkMode onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-4xl'/>
                      </Tooltip>
                    </li>
                  </ul>
                </div>
              <button
               className='rounded-full bg-teal-500 p-2'
               onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaBars className='h-6 w-6 text-white'/>
              </button>
              </>
            )}

          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {!isDesktopScreen && !menuOpen && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-yellow-300 drop-shadow-xl'>
          <div className='flex justify-end p-12'>
            <button
              onClick={()=>setMenuOpen(!menuOpen)}
            >
              <AiFillCloseCircle className='h-6 w-6 text-teal-500'/>
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <LinkNav page="About Me"/>
            <LinkNav page="Projects"/>
            <LinkNav page="Skills"/>
            <LinkNav page="Contact Me"/>
          </div>
        </div>
      )}
     
    </nav>
  )
}

export default Nav