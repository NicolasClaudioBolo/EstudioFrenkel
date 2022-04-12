import React from 'react';
import {Container, Button, CardImg} from 'reactstrap';
import {Link} from 'react-router-dom';
import img from '../../assets/balance.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Container className='Center'>
        <Link to='/'>
            <CardImg src={img} className='Icon' />
        </Link>
        <Link to='/'>
            <Button className='Button'>
                Home
            </Button>
        </Link>
        <Link to='/views/About'>
            <Button className='Button'>
                Acerca de nosotros
            </Button>
        </Link>
        <Link to='/views/Contact'>
            <Button className='Button'>
                Contacto
            </Button>
        </Link>
      </Container>
      
    </div>
  )
}

export default NavBar
