import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex list-none bg-blue-950 text-white py-3 px-2 cursor-pointer gap-x-12'>
      <Link to='/'><li>Home</li></Link>
      <Link to='/about'><li>About</li></Link>
      <Link to='/contact'><li>Contact</li></Link>

    </div>
  )
}

export default Navbar