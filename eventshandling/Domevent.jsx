import React, {Component} from 'react'

export default class Domevent extends Component {
  
    constructor(){
 super()
 this.state={username:"naveen"}
    }
    componentDidMount(){
        document.querySelector("input").addEventListener('keypress',(e)=>{
            this.setState({username:e.target.value})
        })
    }
    
  render() {
  console.log();
   
    return (
      <div>
        <h1>{this.state.username}</h1>
        <input type="text" placeholder='entername'/>
      </div>
    )
  }
}
