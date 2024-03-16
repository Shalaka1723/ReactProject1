import React from 'react'

export default function Contact() {
  return (
    <>
    

    
            <div className='bg-yellow-500 p-3'> 
            <h1 className='font-bold text-4xl mt-10 mb-6'> Contact Us </h1>
            <hr className='mt-6 mb-6 w-16 border-4 border-black '></hr>
            <div className='grid grid-rows-2  '> 
            <div className='grid grid-cols-2 gap-6 h-10 '> 
                <input type='text' placeholder='Name' className='p-4'></input>
                <input type='email' placeholder='Email' className='p-4'></input>
            </div>
            <div> 
                <input type='text' placeholder='Message' className=' p-4 mt- h-32 w-full content-start'></input>
            </div> 
            </div>
            <button className='border-white text-white border-2 mt-5 p-3  font-bold'> SEND MESSAGE </button>
            </div>
  

    </>
  )
}
