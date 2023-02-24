import React, { Component } from 'react'
export default class Employee extends Component {
    constructor(){
        super()
        this.state={name:"Abc", class:"S1",dob:1980}
    }
     change=()=>{
      this.setState({name:"anuj"})
    }
    reset=()=>{
     document.title="VISHAL"
      this.state.name=`Abc`
      this.setState({})
    }
  render() {
  console.log(this.state.name);
    return (
      <div>
        <h1>name:{this.state.name}</h1>
        <h1>class:{this.state.class}</h1>
        <h1>dob:{this.state.dob}</h1>
        <button onClick={this.change}>change</button>
        <button onClick={this.reset}>reset</button>
        
      </div>
    )
  }
}
