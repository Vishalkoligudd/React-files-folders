




import React, { Component } from 'react'
import Logo from './dedicativecss/Logo'
export default class Dedicativecss extends Component {
  render() {
    return (
      <div>
        <Logo/>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-danger">Left</button>
        <button type="button" className="btn btn-warning">Middle</button>
        <button type="button" className="btn btn-success">Right</button>
      </div>
      </div>
    )
  }
}
