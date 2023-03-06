

import {Button,Form, ToastContainer} from 'react-bootstrap';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'



function Signup() {
  let [email,setemail]=useState("")
  let [password,setpassword]=useState('')
  let navigate=useNavigate()
let emailhanler=(e)=>{
setemail(e.target.value)
}
let passhandler=(e)=>{
  setpassword(e.target.value)
}
let submit=(e)=>{
e.preventDefault()
console.log(email,password);
localStorage.setItem('email',email)
localStorage.setItem('password',password)
navigate('/login')
toast.success('success')
}
  return (
    <div style={{backgroundColor:'#3E54AC'}}>
      
    <Form style={{width:'400px',paddingTop:'20px',height:'300px',textAlign:'center',margin:'100px', marginLeft:'300px',backgroundColor:'#ECF2FF',borderRadius:'20px',border:'20px solid #ECF2FF',justifyContent:'space-around'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={emailhanler} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={passhandler}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={submit}>
        SignUp
      </Button>
    </Form>
    </div>
  );
}

export default Signup;