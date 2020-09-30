import React, { Component } from 'react'
import { Card} from 'react-bootstrap'


export class WrongPath extends Component {
    render() {
        return (
            <Card className="text-center margin">
                <Card.Header>404 Error</Card.Header>
                <Card.Body>
                    <Card.Title>Page Not Found</Card.Title>
                    <Card.Text>
                       We can't find the page you're looking for.
                    </Card.Text>
                </Card.Body>

            </Card>
        )
    }
}

export default WrongPath


