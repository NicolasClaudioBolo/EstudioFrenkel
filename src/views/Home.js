import React from 'react'
import Fotos from '../components/Fotos/Fotos'
import Tarjeta from '../components/Card/Tarjeta'
import Up from '../components/Up/Up'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Fotos className='carousel'/>
      <Tarjeta />
      <Up />
    </div>
  )
}

export default Home
