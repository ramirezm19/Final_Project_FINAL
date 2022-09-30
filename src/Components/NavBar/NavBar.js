import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import sip2 from './sip2.png';

let NavBar = () => {
    return (
        <React.Fragment>
            <>
                <Navbar className='navbar' bg="dark" variant="dark">
                    <Container className='container'>
                        <Link to={'/'} className="logo"><img className='logo2' src={sip2} alt="Cocktail" style={{width: 65, height: 75}}></img></Link>
                    <Navbar.Brand href="#home"><span className='text-warning'>Sip</span></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/Restaurants/HHList'>Happy Hours</Nav.Link>
                        <Nav.Link as={Link} to='/Restaurants/add'>New Happy Hour</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
             </>
        </React.Fragment>
    )
};

export default NavBar;