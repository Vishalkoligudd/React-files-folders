import React from 'react'

function Child2(props) {
  return (
    <div>
    <div>Child2</div>
    <strong style={{float:'right'}}>{props.data}</strong>
    </div>
  )
}

export default Child2