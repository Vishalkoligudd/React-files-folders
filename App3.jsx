import React from 'react'
import Nav3 from './Nav3'
import "./global3.css"
function App3() {
  return (
    <div>
        <Nav3 course={{courseavail:true,
                        coursename:"java",
                        courseduration:"3 months"}}/>
       <Nav3 course={{courseavail:false,
                        coursename:"mern",
                        courseduration:"3 months"}}/>
    </div>
  )
}

export default App3