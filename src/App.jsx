import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Course from './pages/Course/Course'
import Blog from './pages/Blog/Blog'
import Book from './pages/Book/Book'
import Home from './pages/Home/Home'
import AppFooter from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <AppFooter/>
    </div>
  )
}

export default App