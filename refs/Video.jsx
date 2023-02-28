import React,{useState,useRef} from 'react'
import VIDEO from "./videoplay.mp4"

function Video() {
    let [video, setvideo]=useState(VIDEO);
    let [play, setplay]=useState(false);  
    let videoref=useRef()
    let changeplay=()=>{
        if(!play){
            
            setplay(true)
            videoref.current.play()  
        }else{
            
            setplay(false)
          videoref.current.pause() 
        }
    }
    return(
    <div>
        <video src={video} ref={videoref} onClick={changeplay}></video>
    </div>
  )
}

export default Video