import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import logo from '../logo.svg'
import { Card, Row, Button, Form, Col, Image } from 'react-bootstrap'

class Login extends React.Component {


    handleSubmit = (e) => {
        e.preventDefault()


    }
    render() {
        const { optionOne, optionTwo } = this.props
        return (
            <Card className="margin">
                <Card.Header className="text-center"><strong>Create New Question</strong></Card.Header>
                <Card.Body>
                    <div className="text-center">
                        <img src={logo} className="App-logo" alt="logo" width={300} />
                    </div>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Col} >
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>dddd</option>
                                <option>eee</option>
                                <option>ttt</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Button variant="success" size="lg" block>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>


        )
    }
}



export default connect()(Login)