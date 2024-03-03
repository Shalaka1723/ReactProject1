import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import Singup from './Singup.jsx'
import LogIn from './LogIn.jsx'
import './index.css'
import ForgotP from './ForgotP.jsx'
import { Login } from '@mui/icons-material'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >

  <BrowserRouter>
    < App/> 
  </BrowserRouter>
  </React.StrictMode>,
)

