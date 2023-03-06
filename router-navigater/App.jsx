import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Nav from './Nav'
import Signup from './Signup'




function App() {
  return (
    <div>
      
      <Router>
      <Nav/>
        <Routes>
        
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
  
}

export default App