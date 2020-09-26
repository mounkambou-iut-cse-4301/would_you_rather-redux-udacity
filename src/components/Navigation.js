import React from 'react'
import { Button,Nav,Navbar } from 'react-bootstrap'


class Navigation extends React.Component {

    render() {
        return (

            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">New Question</Nav.Link>
                    <Nav.Link href="#pricing">Learder</Nav.Link>
                </Nav>
                <Button variant="outline-info">Logout</Button>
            </Navbar>
        )
    }
}

export default Navigation