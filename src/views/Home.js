import React from 'react'
import Pics from '../components/Pics/Pics'
import Work from '../components/Work/Work'
import Text from '../components/Text/Text'
import Divider from '../components/Divider/Divider'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Pics />
        <Divider/>
        <Work />
      <Text />
    </div>
  )
}

export default Home
