import {Button,Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {toast} from 'react-toastify'


function BasicExample() {
  let [email1,setmail]=useState("")
  let [password1,setpass]=useState("")
  let navigate=useNavigate()
let emailhanler=(e)=>{
  setmail(e.target.value)
}
let passhandler=(e)=>{
  setpass(e.target.value)
}
let submit=(e)=>{
e.preventDefault()

let email=localStorage.getItem('email')
let password=localStorage.getItem('password')
if(email===email1 && password===password1){
  navigate('/home')
  toast.success('success')
}else{
  toast.error('error')
}
}
  return (
    <div>
      
    <Form style={{width:'300px',textAlign:'center',margin:'100px', marginLeft:'300px'}}>
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
        Login
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;