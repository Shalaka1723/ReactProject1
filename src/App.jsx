import React from 'react'
import { Route, Routes } from 'react-router'
import Singup from './Singup'
import { Login } from '@mui/icons-material'
import ForgotP from './ForgotP'
import LogIn from './LogIn'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/Singup" element={< Singup/> }/> {/* 👈 Renders at /app/ */}
        <Route path="/LogIn" element={< LogIn/> }/> 
        <Route path="/ForgotP" element={< ForgotP/> }/> 
      </Routes>

    </>
  )
}
