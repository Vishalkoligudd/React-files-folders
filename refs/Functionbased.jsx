import React,{useState,useRef} from 'react'

function Functionbased() {
    let [username,setusername]=useState('chatgpt')
    let divref=useRef()
    let btnref=useRef()
    let change=()=>{
        setusername('gogle')
        divref.current.style.border="9px solid blue"
        divref.current.style.backgroundColor='brown'
       btnref.current.style.height='50px'
    }
  return (
    <div>
        <div ref={divref}>{username}</div>
        <button onClick={change} ref={btnref}>change</button>
    </div>
  )
}

export default Functionbased