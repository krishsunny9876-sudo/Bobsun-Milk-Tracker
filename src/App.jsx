import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Main from './Pages/Main'
import AboutPage from './Components/AboutPage'

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  )
}