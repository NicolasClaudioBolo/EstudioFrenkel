import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import './NavBar.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light className='NavBar'>
          <NavbarBrand href="/" className="mr-auto NavbarBrand">
            <Link to='/' className='Link Logo'>Estudio Frenkel</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem className='NavItem'>
                <Link to="/views/About" className='Link'>Acerca de nosotros</Link>
              </NavItem>
              <NavItem className='NavItem'>
                <Link to="/views/Contact" className='Link'>Contacto</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}