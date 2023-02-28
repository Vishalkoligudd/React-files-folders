import React,{useState,useRef} from 'react'

function Conditionalrendering() {
    let [authuser,setauthuser]=useState(false)
 let Accepteduser=()=>{
   return( <ol>
    <li>Logo</li>
    <li>Menu</li>
    <li>Contact</li>
    <li>Search</li>
</ol>)
 }
 let NotAccepteduser=()=>{
   return( <ol>
    <li>Login</li>
    <li>Signup</li>
    <li>Forgor password ??</li>
</ol>)
 }
 return <>{authuser?<Accepteduser/>:<NotAccepteduser/>}</>
}

export default Conditionalrendering