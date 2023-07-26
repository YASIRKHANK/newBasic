import React from 'react'
import img from '../Images/pic.jpg'

const Html = () => {
    return (
        <div>
            <h1 className='text-[50px] font-extrabold text-center'>iqra university</h1>
            <div className='flex justify-center  py-4'>
                <form className='border p-4 flex bg-slate-100 shadow-md flex-col gap-y-3 w-[75%]  rounded-md '>
                    <div className='flex p-4 gap-x-2'>
                        <img src={img} className='w-1/2 rounded-md' ></img>
                        <div className='w-1/2'>
                            <div className='flex flex-col gap-y-3'>

                                <div className='flex items-center gap-x-2'>
                                    <img src={img} className='w-16 h-16 rounded-full' />
                                    <h1 className='text-2xl text-[#737475]  py-3 text-center'>Resgistration Form</h1>
                                </div>

                                <label>Name</label>
                                <div className='flex items-center gap-x-3'>
                                    <input type='text' placeholder='F_Name' className='border px-2 w-1/2 shadow-md py-1 hover:bg-blue-50 outline-none rounded-md'></input>
                                    <input type='text' placeholder='L_Name' className='border px-2 w-1/2 shadow-md py-1 hover:bg-blue-50 outline-none rounded-md'></input>
                                </div>

                                <label>Father-name</label>
                                <div className='flex gap-x-3 items-center'>
                                    <input type='text' placeholder='Father F-Name' className='border px-2 w-1/2 shadow-md py-1 hover:bg-slate-50 outline-none rounded-sm'></input>
                                    <input type='text' placeholder='Father L-Name' className='border  px-2 w-1/2 shadow-md py-1 hover:bg-slate-50 outline-none rounded-sm'></input>
                                </div>

                                <label>Address</label>
                                <input type='text' placeholder='Address' className='border px-2 outline-none rounded-sm'></input>

                                <label>Distric</label>
                                <input type='text' placeholder='Destrict' className='border px-2 outline-none rounded-sm'></input>

                                <label>Phone Number</label>
                                <input type='text' placeholder='Phone number' className='border px-2  outline-none rounded-sm'></input>

                                <label>CGPA</label>
                                <select className='border outline-none '>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>

                                <label>Select Gender</label>
                                <div className='flex items-center gap-x-2'>

                                    <div >
                                        <label>male</label>
                                        <input type='checkbox' />
                                    </div>

                                    <div >
                                        <label>Female</label>
                                        <input type='checkbox' />
                                    </div>

                                    <div>
                                        <label>Others</label>
                                        <input type='checkbox' />
                                    </div>

                                </div>

                                <textarea rows='10' cols='5' placeholder='any comment' className='border outline-none shadow-md rounded-md p-3'></textarea>
                                <button className='border bg-blue-600 w-1/4  text-white rounded-full px-3 p-1 py-3 mx   ' type='button'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Html