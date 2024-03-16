import React from 'react'
import { Route, Routes } from 'react-router'
import Singup from './components/Singup'
import { Login } from '@mui/icons-material'
import ForgotP from './ForgotP'
import LogIn from './components/LogIn'
import Figma from './components/Ccl3'
import Ccl3 from './components/Ccl3'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/Singup" element={< Singup/> }/> {/* 👈 Renders at /app/ */}
        <Route path="/LogIn" index element={< LogIn/> }/> 
        <Route path="/ForgotP" element={< ForgotP/> }/> 
        <Route path="/Figma" element={< Ccl3/> }/> 

      </Routes>

    </>
  )
}
