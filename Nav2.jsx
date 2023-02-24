import React, { Component } from 'react'

export default class Nav2 extends Component {
  render() {
    let a=this.props.data
    return (
    <div className='menu'>
      <div className='java'>
        <img src={a[0].Img} alt="" />
        <h2>{a[0].coursename}</h2>
        <h3>{a[0].trainer}</h3>
        <div>{a[0].duration}</div>
      </div>
      <div className='mern'>
      <img src={a[1].Img} alt="" />
        <h2>{a[1].coursename}</h2>
        <h3>{a[1].trainer}</h3>
        <div>{a[1].duration}</div>
      </div>
      <div className='python'>
      <img src={a[2].Img} alt="" />
        <h2>{a[2].coursename}</h2>
        <h3>{a[2].trainer}</h3>
        <div>{a[2].duration}</div>
      </div>
      </div>
    )
  }
}
