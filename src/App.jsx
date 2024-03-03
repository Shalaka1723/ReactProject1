import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Singup from './Singup'
import LogIn from './LogIn'
import ForgotP from './ForgotP'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/Singup' element={<Singup/>} />
      <Route path='/LogIn' element={<LogIn/>} />
      <Route path='/ForgotP' element={<ForgotP/>} />

    </Routes>
    </>
  )
}
