import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/About'
import Blog from './pages/Blog'
import Book from './pages/Book'
import Course from './pages/Course'
import Home from './pages/Home'
import Login from './pages/Login'
import Notfound from './pages/Notfound'

import './App.css'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/book' element={<Book/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<Notfound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App