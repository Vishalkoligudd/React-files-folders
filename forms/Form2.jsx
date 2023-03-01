import React, { Component } from 'react'

export default class Form2 extends Component {
         handleform=(e)=>{
        e.preventDefault()
        let username=document.querySelector('#username').value
    let password=document.querySelector('#password').value
        console.log({username,password});
    }
   
  render() {
   
    return (
      <div>
          <form action="">
            <label htmlFor="username">username</label><br />
            <input type="text" id='username'/><br />
            <label htmlFor="password">password</label><br />
            <input type="password" id='password' /><br />
            <button onClick={this.handleform}>submit</button>
        </form>
      </div>
    )
  }
}
