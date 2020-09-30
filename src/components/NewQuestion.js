import React from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import '../App.css'
import { Card, Row, Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class NewQuestion extends React.Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toDashboard: false
    }

    handleChangeOptionOne = (e) => {
        const optionOneText = e.target.value

        this.setState(() => ({
            optionOneText
        }))

    }

    handleChangeOptionTwo = (e) => {
        const optionTwoText = e.target.value

        this.setState(() => ({
            optionTwoText
        }))

    }

    handleQuestionSubmit = (e) => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state
        const { dispatch, authedUser } = this.props
        const author = authedUser
        //add question to store
        dispatch(handleSaveQuestion({ optionOneText, optionTwoText, author }))
        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toDashboard: true
        }))

    }
    render() {
        const { optionOneText, optionTwoText, toDashboard } = this.state
        if (toDashboard === true) {
            return <Redirect to='/' />
        }

        return (
            <Card className="margin">
                <Card.Header className="text-center"><strong>Create New Question</strong></Card.Header>
                <Card.Body>
                    <p>Complite the question</p>
                    <h6><strong>Would you rather...</strong></h6><br />
                    <Form onSubmit={this.handleQuestionSubmit}>
                        <Form.Group>
                            <Form.Control type="text"
                                value={optionOneText}
                                onChange={this.handleChangeOptionOne}
                                placeholder="Enter Option One Text Here" />
                        </Form.Group>
                        <div className="text-center">
                            <strong >OR</strong>
                        </div>

                        <Form.Group>
                            <Form.Control type="text"
                                value={optionTwoText}
                                onChange={this.handleChangeOptionTwo}
                                placeholder="Enter Option Two Text Here" />
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Button variant="success" size="lg" block
                                type="submit"
                                disabled={optionOneText === '' || optionTwoText === ''}>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>


        )
    }
}
const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser

    }
}



export default connect(mapStateToProps)(NewQuestion)