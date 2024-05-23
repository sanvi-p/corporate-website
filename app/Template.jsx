'use client';

//Hooks
import useScrollProgress from '@/hooks/useScrollProgress';
import { delay } from 'framer-motion';
import React from 'react'


//varients
const variants = {
    hidden :{opacity:0},
    enter:{opacity:1}
}




const Template = ({children}) => {
    const completion = useScrollProgress()
  return (
    <>
    <motion.main variants={variants} initial = 'hidden' animate='enter' transition = {{type:'linear', delay:0.2, duration:0.4}}>
        {children}

    </motion.main>

    <span 
    style={{transform:`translateY(${completion-100}%)`}}
    className='fixed z-50 bg-primary w-2 top-0 right-0 bottom-0  transition-all duration-700'>

    </span>

 
    </>
  )
}

export default Template