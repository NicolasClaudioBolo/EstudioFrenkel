import React from 'react'
import Fotos from '../components/Fotos/Fotos'
import Tarjeta from '../components/Card/Tarjeta'
import './Home.css'
import Texto from '../components/Texto/Texto'

const Home = () => {
  return (
    <div>
      <Fotos className='carousel'/>
      <Texto />
      <Tarjeta />
    </div>
  )
}

export default Home
