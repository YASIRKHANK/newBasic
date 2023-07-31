import React from 'react'
import img from '../Images/pizza.jpg'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Card = () => {
  return (
    <div className='flex justify-center py-12'>
        <div className='bg-blue-200 p-4 w-56  rounded-md flex flex-col py-3 items-center justify-center   '>

            <img src={img} className='w-28 h-28 rounded-md'/>
            <h1 className='text-white text-xl font-serif font-semibold'>Pitzza</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button className='font-semibold  bg-green-500 px-3 py-1 rounded-tl-lg rounded-br-lg text-white flex items-center gap-x-2'>Submit<AiOutlineArrowRight/></button>
        </div>
    </div>
  )
}

export default Card