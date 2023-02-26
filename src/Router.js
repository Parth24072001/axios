import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Navbar from './Navbar'
import NoPage from './NoPage'


const Router = () => {
  return (
        <>
  <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<App />} />    
        <Route path="*" element={<NoPage />} />
        </Routes>        
        </>
    )
}

export default Router
