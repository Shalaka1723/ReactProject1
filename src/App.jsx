import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Singup from './Singup'
import LogIn from './LogIn'
import ForgotP from './ForgotP'
import Home from './components/Home'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/Singup' element={<Singup/>} />
      <Route path='/' index element={<Home/>} />
      <Route path='/ForgotP' element={<ForgotP/>} />
      <Route path='/LogIn' element={<LogIn/>} />

    </Routes> 
    </>
  )
}
