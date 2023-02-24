import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  return (
    <div>
        <ToastContainer/>
        <button onClick={()=>{
            toast.warning('success',{
                position:toast.POSITION.TOP_LEFT
            })
        }}>SUCCESS</button>
    </div>
  )
}

export default Toast