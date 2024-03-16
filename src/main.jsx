import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import Singup from './components/Singup.jsx'
import LogIn from './components/LogIn.jsx'
import './index.css'
import ForgotP from './ForgotP.jsx'
import { Login } from '@mui/icons-material'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Ccl3 from './components/Ccl3.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >

  <BrowserRouter>
    < App/> 
  </BrowserRouter>
  </React.StrictMode>,
)

