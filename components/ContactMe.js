import React from 'react'
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai'
const ContactMe = () => {
  return (
     <>
          <h2 className='text-3xl text-gray-800 py-1 dark:text-white font-bold '>Contact Me</h2>             
               <ul className='flex items-center'>
                    <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                         <a href="tel:0411134883"><AiFillPhone/></a>
                    </li>
                    <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                         <a href="mailto:zahra.talaie@gmail.com"><AiOutlineMail/></a>
                    </li>
          
              </ul>
     </>
  )
}

export default ContactMe