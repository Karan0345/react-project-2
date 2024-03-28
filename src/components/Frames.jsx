import React from 'react'

function Frames() {
  return (
    <div>
        <div className='main w-full h-screen bg-black flex rounded-3xl'>
            <div className='right w-[50%] h-screen '>
                <div className='text font-bold text-[3vw] mt-20 ml-24 uppercase'>
                    <h1>Our Culture</h1>
                </div>
                <div className='text1 text-[2vw] pt-10 pl-28'>
                    <p>Human values and high
                    standards are core
                    components of our teams'
                    philosophy and culture.</p>
                    <p className='pt-16'>
                    Whether , designers or
                    developers, we all strive for
                    excellence in designing
                    ambitious, innovative projects.
                    </p>
                </div>
            </div>
            <div className='left w-[50%] h-screen overflow-hidden'>
                <div className='video w-full h-screen mt-24 ml-24'>
                <video autoPlay loop muted src="/src/video/section 5.webm"></video>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Frames