
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Checkbox, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';
export default function LogIn() {
  return (

    <>
      
      <div className='bg-[#6092CC] flex justify-center items-center h-screen' >
        <div className='w-96 p-6 bg-white rounded-lg h-100  '>
        <div className=' text-lg font-medium '>
            LOGIN
        </div>
        <div className='mt-3'>
            <label htmlFor="Email" className='block mb-1 ' > Email </label>
            <input type="email" id="email" className='rounded border-2 w-full px-2 py-1 focus:border-gray-600' />
        </div>

        <div className='mt-3'>
            <label htmlFor="Password" className='block mb-1 ' > Password </label>
            <input type="password" id="password" className='rounded border-2 w-full px-2 py-1 focus:border-gray-600' />
        </div>
        <div className='mt-2 '>
        <Checkbox defaultChecked sx={{
    color: pink[800],'&.Mui-checked': {
      color: pink[600],
    }, 
  }}/>         
            <label htmlFor="remember" className='pl-1 ' > Remember me? </label>
              
        </div>
        <div className='mt-3'>
            <button className='drop-shadow-lg mt-1 p-2 bg-pink-500 text-white w-full rounded-xl border-pink-700'>
                LOGIN
            </button>
        </div>
        <div className='flex justify-end'>
          <button className='mt-1 text-gray-400'>
             Forgot Password?
        </button></div>
        <hr className='mt-2 mb-4 border-1'></hr>

        <div className=' flex justify-center gap-3 '>
          <GoogleIcon  color= "primary"/>
          <FacebookIcon  color= "primary"/>
          <LinkedInIcon  color= "primary"/>
        </div>
        <div className='mt-1 text-center '>
             Need an account? 
             <button className='pl-1 underline'> SIGN UP
              </button>
        </div>
        </div>
    </div>

    </>

  )
}
