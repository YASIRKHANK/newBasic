import React from 'react'

const Grid = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='border w-full bg-green-300 rounded-md h-[100px] flex justify-center items-center'>
                Hilal
            </div>
            <div className='border w-full bg-green-300 rounded-md h-[100px] flex justify-center items-center'>
                bilal
            </div> <div className='border w-full bg-green-300 rounded-md h-[100px] flex justify-center items-center'>
                adil
            </div> <div className='border w-full bg-green-300 rounded-md h-[100px] flex justify-center items-center'>
                naeem
            </div>
        </div>
    </div>
  )
}

export default Grid