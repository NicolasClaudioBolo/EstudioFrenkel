import React from 'react'
import { Card, CardImg, Container } from 'reactstrap'
import img from '../assets/whatsapp.png'
import img2 from '../assets/gmail.png'
import './Contact.css'

const Contact = () => {
  // TODO formulario de contacto
  return (
    <Container className='container-fluid'>
    <div className='Grid'>
      <a href='#'>
        <Card className='ContactLogo Margin'>
          <CardImg src={img} />
        </Card>
      </a>
      <a href='#'>
        <Card className='ContactLogo Margin'>
          <CardImg src={img2} />
        </Card>
      </a>
    </div>
    </Container>
  )
}

export default Contact
