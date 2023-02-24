import React from 'react'

function Nav4(props) {
  return (
    <div>
        <ul style={{listStyle:'none'}}>
            {props.data.course.map((x)=>{
              return <li>{x}</li>
            })}
        </ul>
    </div>
  )
}

export default Nav4