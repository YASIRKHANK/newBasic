import React, { useState } from 'react'
import women from '../Images/women.jpg'
const About = () => {
  const [show,setShow]=useState("show")
  // const [img,setImg]=useState(false)

  const handleImage=()=>{
    setShow("!show")
  }

  
  const handleImg=()=>{
    setShow(false)
  }
  
  return (
    <div className='flex gap-x-6 mt-6'>

      <div className='w-1/2 px-12 py-2 '>
        <h1 className='text-3xl font-bold '>AtmosBit</h1>
        <p className=' tracking-widest font-[arial] text-justify'>Apologies for the confusion. To have the cards in a single row while still having the heading "Our Popular Courses" and the line above the cards, you can wrap the cards and the heading in a separate div and use the flex-col class on it. Then, use the flex class on the cards container to keep the cards in a row. Here's the updated code:</p>
        <button onClick={handleImage} type='button' className='border  bg-blue-950 text-white rounded-lg px-4 py-1'>Show</button>
        <div>
          {
            show && (
              <img src={women}  onClick={handleImg} className='rounded-2xl w-52 h-52 '/>
            )
          }
        </div>
      </div>
      <div className='w-1/2 px-12 py-4  '>
        <img src={women} alt='women' className='rounded-2xl ' />
      </div>

    </div>
  )
}

export default About