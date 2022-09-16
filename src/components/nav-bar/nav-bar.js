import React from 'react'
import {ReactComponent as CrownLogo} from '../assets/crown.svg';
import './nav-bar.scss';

import {Container, Nav, Navbar} from 'react-bootstrap';


export default class NavBar extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <React.Fragment>
                <Navbar expand="lg" bg="dark" variant="dark" className='navigation-bar'>
                    <Container>
                        <Navbar.Brand className="" href="/"><CrownLogo className='logo'/></Navbar.Brand>
                        <Nav>
                            <Nav.Link className="navigation-links" href="/about-us">About Us</Nav.Link> 
                        </Nav>
                        <Nav>
                            <Nav.Link className="navigation-links" href="/helper-login">Helfer Login</Nav.Link> 
                        </Nav>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}