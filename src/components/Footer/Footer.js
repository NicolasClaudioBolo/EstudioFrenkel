import React from 'react'
import { Nav, NavbarText, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import whatsappImg from '../../assets/whatsapp.png'
import gmailImg from '../../assets/gmail.png'

const Footer = () => {
  return (
    <div>
      <Nav className='Footer'>
        <NavItem>
          <NavbarText tag="h5" className='Text'>
            Nuestro Whatsapp
          </NavbarText>
          <a href="
            https://api.whatsapp.com/send?phone=5491158452656&text=Hola,%20le%20escribo%20por%20la%20siguiente%20consulta:
            "
            className='NavLink ml-5'
            target='_blank'>
              <img src={whatsappImg} className='linkLogo' alt='whatsapp'/>
          </a>
        </NavItem>
        <NavItem>
        <NavbarText tag="h5" className='Text'>
            Nuestro Email
        </NavbarText>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alfonsofrenkel@gmail.com" target="blank"
          className='NavLink'>
            <img src={gmailImg} className='linkLogo' alt='gmail'/>
          </a>
        </NavItem>
      </Nav>
</div>
  )
}

export default Footer
