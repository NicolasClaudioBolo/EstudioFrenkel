import React from 'react'
import { Card, CardBody, CardImg } from 'reactstrap';
import './About.css';
import img from '../assets/UBA.jpg'

const About = () => {
  return (
    <div>
      <h3 className='EstiloTexto'>
      Somos abogados recibidos en la Universidad de Buenos Aires, nos especializamos en la defensa integral de los trabajadores, bla bla bla

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
