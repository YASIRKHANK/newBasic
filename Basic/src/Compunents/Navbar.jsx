import React from 'react'

const Navbar = () => {

  return (
    <div className='bg-[#071952]  flex  flex-col lg:flex-row items-center justify-between'>
      <div className='flex flex-col lg:flex-row list-none  gap-x-8 px-4  py-2 text-white font-semibold'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Detail</li>

      </div>
      <div className='px-4 flex flex-col gap-y-2 md:flex-row gap-x-4'>
        <button className='bg-green-700 px-4 py-1 hover:bg-slate-500 text-white font-semibold rounded-md' >Login</button>
        <button className='bg-green-700 px-4 py-1 hover:bg-slate-500 text-white font-semibold rounded-md' >SignUp</button>

      </div>
    </div>
  )
}

export default Navbar
