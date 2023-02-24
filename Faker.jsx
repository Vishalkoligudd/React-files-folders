import React, { Component } from 'react'
import {faker} from '@faker-js/faker'

export default class Faker extends Component {
    constructor(){
        super()
        this.state={Photo:faker.image.avatar()}
    }
  render() {
    return (
      <div>
        <img src={this.state.Photo} alt="" />
<button onClick={()=>{
    this.setState({Photo:faker.image.avatar()})
}}>click to change</button>
      </div>
    )
  }
}
