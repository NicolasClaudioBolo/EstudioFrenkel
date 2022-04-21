import React from 'react'
import './Up.css'
import img from '../../assets/Up.png'
import { Link } from 'react-router-dom'

const Up = () => {
  return (
    <div className='CentrarGadget'>
        <a href='/'>
            <img src={img} className='Up'></img>
        </a>   
    </div>
  )
}

export default Up
