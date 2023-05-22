import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant='dark' fixed='top'>
                    <Container fluid>
                        <Navbar.Brand >News Monkey</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Link to='/' className='nav-link'>Home</Link>
                                <Link to='/business' className='nav-link'>Business</Link>
                                <Link to='/entertainment' className='nav-link'>Entertainment</Link>
                                <Link to='/' className='nav-link'>General</Link>
                                <Link to='/health' className='nav-link'>Health</Link>
                                <Link to='/science' className='nav-link'>Science</Link>
                                <Link to='/sports' className='nav-link'>Sports</Link>
                                <Link to='/technology' className='nav-link'>Technology</Link>
                                                                                         
                            </Nav>
                            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        )
    }
}
