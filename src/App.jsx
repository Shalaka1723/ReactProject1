import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Singup from './components/Singup'
import LogIn from './components/LogIn'
import ForgotP from './components/ForgotP'
import Ccl3 from './components/Ccl3'
import Home from './components/Home'
import Test from './components/Test'



export default function App() {
  return (
    <>
    <Routes>
      <Route path='/Singup' element={<Singup/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/ForgotP' element={<ForgotP/>} />
      <Route path='/LogIn' index element={<LogIn/>} />
      <Route path='/Test' element={<Test/>} />

      <Route path="/Ccl3" element={< Ccl3/> }/> 

    </Routes> 
    </>
  )
}
