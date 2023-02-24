import React, { Component } from 'react'
import E2 from './E2'
import json from './employee.json'

export default class App extends Component {
   state={empdetails:json}
  render() {
    return (
      <div>
    <E2 empdetails1={this.state.empdetails} />
      </div>
    )
  }
}
