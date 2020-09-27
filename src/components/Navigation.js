import React from 'react'
import { Button, Nav, Navbar, Image } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import '../App.css'


class Navigation extends React.Component {

    render() {
        return (

            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">New Question</Nav.Link>
                    <Nav.Link href="#pricing">Learder</Nav.Link>
                </Nav>
                <strong>Hello, sarahedo </strong>
                <Image src="./images/sarahedo.png" width={40} roundedCircle alt="avatar" />

                <Button variant="outline-info" className="logout-btn">Logout</Button>
            </Navbar>
        )
    }
}

export default Navigation