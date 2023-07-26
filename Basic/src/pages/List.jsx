import React from 'react'
import {AiFillFastBackward, AiFillInstagram, AiOutlineCopyright} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import Card from '../Compunents/Card'



const List = () => {
    return (
        <div className='bg-red-200'>
            <Card/>
            <h1 className='text-xl text-green-400 font-bold text-center p-5 hover:text-green-900'>Order List</h1>
            <div>
                <ol className=' list-decimal p-12'>
                    <li>
                        hilal

                    </li>
                    <li>
                        junaid

                    </li> <li>
                        aziz

                    </li> <li>
                        yasir

                    </li> <li>
                        xyz
                    </li>
                </ol>
            </div>
            <div>
                <ul  className='list-none  justify-center gap-x-4 bg-red-300  py-3  flex '>
                    <li className='cursor-pointer px-3 py-1 rounded-tl-md rounded-br-md   bg-green-500 hover:text-white'>
                        hilal

                    </li>
                    <li>
                        junaid
                        {/* <AiFillFastBackward/> */}

                    </li> <li>
                        aziz
                        <FaFacebookF/>
                        <AiFillInstagram className='text-2xl text-green-400'/>

                    </li> <li>
                        yasir

                    </li> <li>
                        xyz
                    </li>
                </ul>

                <div>
                    <input type='file' className='border bg-slate-400 px-4 py-1'></input>
                </div>
                <footer className='bg-blue-500 text-center text-white flex items-center justify-center gap-x-2'><AiOutlineCopyright/><p>copyRight-Reserved</p></footer>
            </div>
        </div>
    )
}

export default List