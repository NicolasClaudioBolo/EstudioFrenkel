import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import gmailImg from '../../assets/gmail.png'
import whatsappImg from '../../assets/whatsapp.png'
import DropdownBtn from '../DropdownBtn/DropdownBtn';
import './NavBar.css'

function NavBar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar light className='NavBar'>
          <NavbarBrand className="mr-auto NavbarBrand">
            <Link to='/' className='Link Logo'>Estudio Frenkel</Link>
          </NavbarBrand>
          <NavItem>
            <NavLink
              active
              href="
              https://api.whatsapp.com/send?phone=5491158452656&text=Hola,%20le%20escribo%20por%20la%20siguiente%20consulta:
              "
              className='Link'
              target='_blank'>
              <img src={whatsappImg} className='linkLogo' alt='whatsapp'/>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alfonsofrenkel@gmail.com" target="blank"
            className='Link'>
              <img src={gmailImg} className='linkLogo' alt='gmail'/>
            </NavLink>
          </NavItem>
          <NavbarToggler onClick={toggleNavbar} className="mr-2 mt-4" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem className='NavItem' onClick={toggleNavbar}>
                <Link to="/views/About" className='Link'>Acerca de nosotros</Link>
              </NavItem>
              {/* <NavItem className='NavItem'>
                <Link to="/views/Contact" className='Link'>Contacto</Link>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar