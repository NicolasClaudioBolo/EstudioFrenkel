import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import img from '../../assets/whatsapp.png'
import img2 from '../../assets/gmail.png'

const Footer = () => {
  return (
    <div>
      <Nav className='Footer'>
        <NavItem>
          <NavLink
            active
            href="#"
            className='NavLink'>
            <img src={img} className='linkLogo'/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"
          className='NavLink'>
            <img src={img2} className='linkLogo'/>
          </NavLink>
        </NavItem>
      </Nav>
</div>
  )
}

export default Footer
