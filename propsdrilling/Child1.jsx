import React from 'react'

function Child1(props) {
  return (
    <>
    <div>Child1</div>
    <strong style={{float:'right'}}>{props.data}</strong>
    </>
  )
}

export default Child1