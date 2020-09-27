import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import { Card, Row, Button, Form } from 'react-bootstrap'

class NewQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChangeOptionOne = (e) => {
        const optionOne = e.target.value

        this.setState(() => ({
            optionOne
        }))
    }

    handleChangeOptionTwo = (e) => {
        const optionTwo = e.target.value

        this.setState(() => ({
            optionTwo
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state

        //todo: add options to store

    }
    render() {
        const { optionOne, optionTwo } = this.props
        return (
            <Card className="margin">
                <Card.Header className="text-center"><strong>Create New Question</strong></Card.Header>
                <Card.Body>
                    <p>Complite the question</p>
                    <h6><strong>Would you rather...</strong></h6><br />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Control type="text"
                                value={optionOne}
                                onChange={this.handleChangeOptionOne}
                                placeholder="Enter Option One Text Here" />
                        </Form.Group>
                        <div className="text-center">
                            <strong >OR</strong>
                        </div>

                        <Form.Group>
                            <Form.Control type="text"
                                value={optionTwo}
                                onChange={this.handleChangeOptionTwo}
                                placeholder="Enter Option Two Text Here" />
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



export default connect()(NewQuestion)