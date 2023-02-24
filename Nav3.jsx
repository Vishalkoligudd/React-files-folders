import React from 'react'

function Nav3(props) {
    if(props.course.courseavail)
  return (
    <div>
        <h1 >{props.course.coursename}</h1>
        <button style={{backgroundColor:'green',border:"groove 2px",borderRadius:"50%"}}>available</button>
    </div>
  )
  else
  return(
    <div>
        <h1>{props.course.coursename}</h1>
        <button style={{backgroundColor:'red'}}>not available</button>
    </div>
  )
}


export default Nav3