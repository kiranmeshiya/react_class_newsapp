import React, { Component } from 'react'
import Loader from '../loader.gif'

export default class Spiner extends Component {
  render() {
    return (
      <div className='spin_div text-center'>
        <img src={Loader} alt=""></img>
      </div>
    )
  }
}
