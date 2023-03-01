import React from 'react'

function Form3() {
    const handleform=(e)=>{
       e.preventDefault()
       
       console.log(username,password);
    }
    let username=document.querySelector('#username').value
       let password=document.querySelector('#password').value
  return (
    <div>
          
          <form action="">
            <label htmlFor="username">username</label><br />
            <input type="text" id='username'/><br />
            <label htmlFor="password">password</label><br />
            <input type="password" id='password' /><br />
            <button onClick={handleform}>submit</button>
        </form>
    </div>
  )
}

export default Form3