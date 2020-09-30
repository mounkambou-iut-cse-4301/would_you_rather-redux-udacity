import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import logo from '../logo.svg'
import { Card, Row, Button, Form, Col } from 'react-bootstrap'
import { setAuthedUser } from '../actions/authedUser'

class Login extends React.Component {


    handleSubmit = (e) => {

        const { dispatch } = this.props
        const selectUser = this.select_user_id.value

        console.log(selectUser);
        e.preventDefault()
        dispatch(setAuthedUser(selectUser))



    }
    render() {
        const { users } = this.props
        return (
            <Card className="margin">
                <Card.Header className="text-center"><strong>Create New Question</strong></Card.Header>
                <Card.Body>
                    <div className="text-center">
                        <img src={logo} className="App-logo" alt="logo" width={300} />
                    </div>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Col} >
                            <Form.Control as="select" ref={(id) => (this.select_user_id = id)}>
                                <option value=""></option>
                                {
                                    Object.keys(users).map((user) => {
                                        return <option key={users[user].id}
                                            value={users[user].id} >
                                            {users[user].name}

                                        </option>
                                    })
                                }

                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Button variant="success" size="lg" block

                                type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>


        )
    }
}
const mapStateToProps = ({ users }) => {

    return {
        users
    }
}




export default connect(mapStateToProps)(Login)