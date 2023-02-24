import React, { Component } from 'react'
import Nav2 from './Nav2.jsx'
import JSON from './course.json'
import "./Global2.css"


export default class App2 extends Component {
  render() {
    return (
      <div>
        <Nav2 data={JSON}/>
      </div>
    )
  }
}
