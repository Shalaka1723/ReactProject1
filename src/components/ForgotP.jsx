
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Checkbox, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors'
import { Link } from 'react-router-dom';
import React from 'react'


export default function ForgotP() {
  return (
    <> 
<div className='bg-[#6092CC] flex justify-center items-center h-screen' >
        <div className='w-96 p-6 bg-white rounded-lg h-100  '>
        <div className=' text-lg font-medium '>
            FORGOT PASSWORD
        </div>
        <div className='mt-3'>
            <label htmlFor="Email" className='block mb-1 ' > Email </label>
            <input type="email" id="email" className='rounded border-2 w-full px-2 py-1 focus:border-gray-600' />
        </div>

        <div className='mt-3'>
            <label htmlFor="otp" className='block mb-1 ' > OTP </label>
            <input type="text" id="otp" placeholder="Enter OTP recieved on registered Email" className='text-sm rounded border-2 w-full px-2 py-1 focus:border-gray-600' />
        </div>
        
        <div className='mt-3'>
            <button className='drop-shadow-lg mt-1 p-2 bg-pink-500 text-white w-full rounded-xl border-pink-700'>
                VALIDATE
            </button>
        </div>
       
        <hr className='mt-2 mb-4 border-1'></hr>

        <div className='mt-1 text-center '>
            Go Back. 
            <Link to={"/LogIn"} className='pl-1 underline'> LOGIN
              </Link>
        </div>
        </div>
    </div>

    </>
  )
}
