import React from 'react'
import { Card, CardBody, CardImg } from 'reactstrap';
import './About.css';
import img from '../assets/UBA.jpg'

const About = () => {
  return (
    <div>
      <h3 className='EstiloTexto'>
      

      </h3>
      <Card>
        <CardBody>
          <CardImg 
          src={img}/>
        </CardBody>
      </Card>
    </div>
  )
}

export default About
