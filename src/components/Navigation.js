import React from 'react'
import { connect } from 'react-redux'
import { Button, Nav, Navbar, Image } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import '../App.css'
import { setAuthedLogout } from '../actions/authedUser'


class Navigation extends React.Component {

    handleAuthedLogout = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedLogout())
    }

    render() {
        const { user } = this.props
        return (

            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" exact>
                        Home
						</Nav.Link>
                    <Nav.Link as={NavLink} to="/new_question" exact>
                        New Question
						</Nav.Link>
                    <Nav.Link as={NavLink} to="/leaderboard" exact>
                        Learderboard
						</Nav.Link>
                </Nav>
                <strong>Hi, {user ? user.name : null}</strong>
                <Image src={user ? user.avatarURL : null} width={40} roundedCircle alt="avatar" />

                <Button variant="outline-info" className="logout-btn" onClick={this.handleAuthedLogout}>Logout</Button>
            </Navbar>
        )
    }
}

const mapStateToProps = ({ users, authedUser }) => {

    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(Navigation)