import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Singup from './Singup.jsx'
import './index.css'
import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Home from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
)

