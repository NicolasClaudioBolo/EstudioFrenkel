import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import whatsappImg from '../../assets/whatsapp.png'
import gmailImg from '../../assets/gmail.png'
import Up from '../Up/Up';

const Footer = () => {
  return (
    <div>
      <Nav className='Footer'>
        <NavItem>
          <NavLink
            active
            href="
            https://api.whatsapp.com/send?phone=5491158452656&text=Hola,%20le%20escribo%20por%20la%20siguiente%20consulta:
            "
            className='NavLink'
            target='_blank'>
            <img src={whatsappImg} className='linkLogo' alt='whatsapp'/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alfonsofrenkel@gmail.com" target="blank"
          className='NavLink'>
            <img src={gmailImg} className='linkLogo' alt='gmail'/>
          </NavLink>
        </NavItem>
        <Up />
      </Nav>
</div>
  )
}

export default Footer
