import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export default function Singup() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-blue-400">
        <div className=" w-96 p-6 bg-white rounded-lg">
          <h1 className="font-semibold text-center text-3xl">Sing Up</h1>
          <hr className="mt-3" />
          <div className="mt-3 items-start">
            <label htmlFor="Username" className=" flex justify-self-start text-base mb-2  ">Username</label>
            <input type="text" id="Username" className="rounded-lg border w-full text-base px-2 py-2 focus:border-gray-600" placeholder='Enter Your Name...'/>
          </div>
          <div className="mt-3">
            <label htmlFor="Password" className="flex justify-self-start text-base mb-2">Password</label>
            <input type="Password" id="Password" className="rounded-lg border w-full text-base px-2 py-2 focus:border-gray-600" placeholder='Enter Your Password'/>
          </div>
          <div className="mt-5">
            <button type="submit" className=" border-2 border-pink-600 bg-pink-600 text-white py-1 w-full rounded-lg">Sing Up</button>
            <hr className="mt-3" />
          </div>
          <div className='flex justify-between mt-1 text-center text-blue-800 '>
              <p>Already have an account? </p>
              <Link to={"/Login"} className='pl-1 text-pink-700'>Login</Link>
          </div>
          <div className=' flex justify-center gap-3 mt-2'>
          <GoogleIcon  sx={{ color: pink[600] }} />
          <FacebookIcon  sx={{ color: pink[600] }}/>
          <LinkedInIcon  sx={{ color: pink[600] }}/>
          </div>

        </div>
      </div>
    </>
  )
}
