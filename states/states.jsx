import React, { Component } from 'react'

export default class states extends Component {
    state={
        username:"raj",
        skills:["java","react","nodejs"]
    }
  render() {
    return (
      <div>{this.state.username}</div>
    )
  }
}
