import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Frames from './components/Frames'
import Next from './components/Next'
import Videopage from './components/Videopage'



function App() {
  return (
  <div className='bg-[#8d7c7c]'>
    <div className='w-full min-h-screen text-white relative'>
      <Navbar />
      <About />
      <Landingpage />
    </div>
       <div className='w-full min-h-screen text-white'>
        <Marquee />
        <Frames />
        <Videopage />
        <Next />
       </div>
    </div>
  )
}

export default App