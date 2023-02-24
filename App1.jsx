import React, { Component } from 'react'
import Nav1 from './Nav1'
import img1 from "./img/photo-1541675154750-0444c7d51e8e.jpeg"

export default class App1 extends Component {
  render() {
    return (
      <div>
        
        <Nav1 photo={img1} />
      </div>
    )
  }
}
