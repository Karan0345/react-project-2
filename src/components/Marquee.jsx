import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 bg-[#ffffffb1] text-zinc-800 rounded-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-900 gap-10 flex overflow-hidden whitespace-nowrap mt-15'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[12vw] leading-none font-bold uppercase mb-2 -mt-5'>We are Ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[12vw] leading-none font-bold uppercase mb-2 -mt-5'>We are Ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[12vw] leading-none font-bold uppercase mb-2 -mt-5'>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee