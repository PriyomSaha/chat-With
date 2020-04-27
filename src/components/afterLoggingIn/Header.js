import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import Logo from "../logos/logos_white.png";
class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        
        const design = {
            color: 'white',
            width:'100%',
            background: 'rgb(93, 164, 226)',
            borderRadius: '5px',
            padding: '2vh',
            fontWeight: 'bold',
            textDecoration: 'none',
            marginRight:'15px',
            marginBottom:'5px',
            border:'1px solid white'
        };
        return (
            <div>
                
                <Navbar color="info" light expand="md">
                    <NavbarBrand>
                    <Link to=''><Image src={Logo} className="logo"/></Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto headerButtons" navbar>
                            <NavItem>
                                <Link to='/addroom'><NavLink style={design} size="6"
                                className="py-3 px-md-5">Create New Room</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to=''><NavLink style={design}size="6"
                                className="py-3 px-md-5">Log out</NavLink></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header