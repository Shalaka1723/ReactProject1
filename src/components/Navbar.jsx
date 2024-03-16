import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <>
      
    <div className=' px-10'>
        <header className='top-0  '>
        
          <nav className=' bg-white flex justify-between items-center p-1.7 pt-4 pb-4 text-center'>
            <div className='text-xl text-black font-bold'><h1>Construction Company Landing</h1> </div>
            <div className='flex '>
              <ul className='flex text-black items-center pr-3 font-semibold text-sm '>
                <li className='text-sm pr-8'>Project</li>
                <li className='pr-8 '>Blog</li>
                <li className='pr-8 '>Portfolio</li>
                <li className='pr-8 '>Service</li>
                <li className='pr-8 '>Contact</li>
                <li className='pr-8 '>About</li>
                <li className='pr-6 '>Home</li>
                <li className='pr-3 '>
                  <Link to={"/LogIn"} className='rounded-3xl bg-gray-300 text-black shadow border-gray-300 border-2 p-2 pt-1 '> Log In 
                  </Link> </li>
                <li className='pr-4 text-sm'>
                  <Link to={"/SignUp"} className='rounded-3xl bg-gray-800 text-white shadow border-gray-800 border-2 p-2 pt-1 '> Sign Up 
                  </Link> </li>
                <li> <ShoppingCartIcon/> </li>
              </ul>
        
            </div>
          </nav>
        </header>
        </div>

    </>
  )
}
