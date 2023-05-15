import React, { useContext } from 'react'
import {AiFillPhone, AiOutlineMail} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { PageContext } from '@/hooks/PageContext'
import { useForm } from 'react-hook-form'
const ContactMe = () => {
     const {setSelectedPage} = useContext(PageContext)
     const inputStyles = `mt-5 w-full rounded-lg px-5 py-3 placeholder-black bg-teal-400 border-none`
     const {register, trigger,formState:{errors}} = useForm() 
     const onSubmit= async(e) =>{
          const isValid = await trigger()
          if(!isValid){
               e.preventDefault()
          }
     }   
  return (
     <section id='contactme' className="mx-auto w-5/6 pt-40 pb-32">
          <motion.div onViewportEnter={() => setSelectedPage("contactme")}>
               <motion.div
               className="md:w-3/5"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
               }}
               >
                    <h2 className='text-3xl text-gray-800 py-1 dark:text-white font-bold '>Contact Me</h2> 
               </motion.div>
               <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                         className="mt-10 basis-3/5 md:mt-0"
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ duration: 0.5 }}
                         variants={{
                         hidden: { opacity: 0, y: 50 },
                         visible: { opacity: 1, y: 0 },
                         }}
                    >
                         <form
                              target="_blank"
                              onSubmit={onSubmit}
                              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                              method="POST"
                         >
                              <input
                                   className={inputStyles}
                                   type="text"
                                   placeholder="NAME"
                                   {...register("name", {
                                   required: true,
                                   maxLength: 100,
                                   })}
                              />
                              {errors.name && (
                                   <p className="mt-1 text-red-500">
                                   {errors.name.type === "required" && "This field is required."}
                                   {errors.name.type === "maxLength" &&
                                   "Max length is 100 char."}
                                   </p>
                              )}

                              <input
                                   className={inputStyles}
                                   type="text"
                                   placeholder="EMAIL"
                                   {...register("email", {
                                   required: true,
                                   pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                   })}
                              />
                              {errors.email && (
                                   <p className="mt-1 text-red-500">
                                   {errors.email.type === "required" &&
                                   "This field is required."}
                                   {errors.email.type === "pattern" && "Invalid email address."}
                                   </p>
                              )}

                              <textarea
                                   className={inputStyles}
                                   placeholder="MESSAGE"
                                   rows={4}
                                   cols={50}
                                   {...register("message", {
                                   required: true,
                                   maxLength: 2000,
                                   })}
                              />
                              {errors.message && (
                                   <p className="mt-1 text-red-500">
                                   {errors.message.type === "required" &&
                                   "This field is required."}
                                   {errors.message.type === "maxLength" &&
                                   "Max length is 2000 char."}
                                   </p>
                              )}

                              <motion.div
                                   className="relative mt-16 basis-2/5 md:mt-0 flex justify-between"
                                   initial="hidden"
                                   whileInView="visible"
                                   viewport={{ once: true, amount: 0.5 }}
                                   transition={{ delay: 0.2, duration: 0.5 }}
                                   variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                   }}
                              >
                                   <button
                                        type="submit"
                                        className="mt-5 rounded-lg bg-yellow-300 px-20 py-3 transition duration-500 hover:text-white"
                                   >
                                        SUBMIT
                                   </button>
                                   <ul className='flex items-center'>
                                   <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                                        <a href="tel:0411134883"><AiFillPhone/></a>
                                   </li>
                                   <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                                        <a href="mailto:zahra.talaie@gmail.com"><AiOutlineMail/></a>
                                   </li>
                         
                                   </ul>
                              </motion.div>
                         
                         </form>
                    </motion.div>

                    {/* <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                    }}
               >
                    <ul className='flex items-center'>
                    <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                         <a href="tel:0411134883"><AiFillPhone/></a>
                    </li>
                    <li className='text-5xl flex justify-center gap-16 py-3 text-teal-600 '>
                         <a href="mailto:zahra.talaie@gmail.com"><AiOutlineMail/></a>
                    </li>
          
                    </ul>
               </motion.div> */}
               </div>
          </motion.div>

     </section>
  )
}

export default ContactMe