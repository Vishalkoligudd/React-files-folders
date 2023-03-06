import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Nav() {
  let logo='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png'
  return (
    <div style={{border:'2px solid red',backgroundColor:'#635985',display:'flex',alignItems:'center' }}>
       <ToastContainer/>
        <div>
            <img src={logo} alt="" height='70px'/>
        </div>
        <ul style={{display:'flex',width:'600px',justifyContent:'space-around',alignItems:'center',listStyle:'none'}}>
            <Link to='/login'><h1>Login</h1></Link>
            <Link to='/signup'><h1>Signup</h1></Link>
            <Link to='/home'><h1>Home</h1></Link>
        </ul>
    </div>
  )
}

export default Nav