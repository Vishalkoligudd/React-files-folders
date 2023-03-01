import React, { Component } from 'react'

export default class Form1 extends Component {
   
    componentDidMount(){
        document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        let username=document.getElementById('username').value
        let password=document.getElementById('password').value
        console.log(username,password);
        })
     }
  render() {
    return (
      <div>
        <form action="">
            <label htmlFor="username">username</label><br />
            <input type="text" id='username'/><br />
            <label htmlFor="password">password</label><br />
            <input type="password" id='password' /><br />
            <button>submit</button>
        </form>
      </div>
    )
  }
}
