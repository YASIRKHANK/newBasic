import React from 'react'
import card1Data from '../Config/Card1Data'

const Card1 = () => {
    return (
        <div className='flex gap-x-3 px-12 mt-5'>
            {
                card1Data.map((items) => (
                    <>
                       <div className='border px-5 py-5  bg-green-300 rounded-2xl  '>
                        <div className='flex w-full justify-center items-center'>
                       <h1 className='text-3xl border rounded-full p-2 w-16 h-16 bg-black text-white flex justify-center items-center '>{items.icons}</h1>

                        </div>
                        <h1 className='text-xl py-3 text-center font-bold'>{items.heading}</h1>
                        <p className=' text-center'>{items.para}</p>
                       </div>
                    </>
                ))
            }
        </div>
    )
}

export default Card1