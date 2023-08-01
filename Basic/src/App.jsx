import { useState } from 'react'

import './App.css'
// import Navbar from './Compunents/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home1 from './pages/Home1'
import About from './pages/About'
import Contact from './pages/Contact'
import Detail from './pages/Detail'



function App() {

  return (
    <>
    {/* <Navbar/>  */}
    {/* <Home/> */}
    {/* <Html/> */}
    {/* <List/> */}
    {/* <Grid/> */}
    {/* <Task/> */}

    <Router>
      <Routes>
        

        <Route path='/' element={<Home1/>} />
      </Routes>
      <Routes>
        

        <Route path='/about' element={<About/>} />
      </Routes>
      <Routes>
        

        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Routes>
        

        <Route path='/detail' element={<Detail/>} />
      </Routes>
    </Router>

   
      
    </>
  )
}

export default App
