import React, { Component, createRef } from 'react'

export default class Classbased extends Component {
  constructor(){
    super()
    this.state={count:0}
    this.h1ref=createRef()
    this.h2ref=createRef()
  }
  change=()=>{
    console.log(this.h1ref);
    this.h1ref.current.style.border='2px solid black'
    this.h1ref.current.style.backgroundColor="blue"
    this.h1ref.current.style.height='200px'
    this.h2ref.current.style='background-color: #e3f2fd'
  
  }

  render() {
    return (
      <div>
        <div ref={this.h1ref}>{this.state.count}</div>
        <button onClick={this.change} ref={this.h2ref}>change</button>
      </div>
    )
  }
}
