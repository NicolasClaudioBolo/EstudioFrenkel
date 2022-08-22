import React from 'react'
import Pics from '../components/Pics/Pics'
import Work from '../components/Work/Work'
import Text from '../components/Text/Text'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Pics />
        {/* <div className='work-card-grid'>
          <Work />
        </div> */}
        <Work />
      <Text />
    </div>
  )
}

export default Home
