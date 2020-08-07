import React, { Component } from 'react';

// 3rd party imports
import { Card } from 'react-bootstrap';

// Import css
import './Bio.css';

// This is why you can't use class for styles anymore
export default class ProfileCard extends Component {

    render() {
        return (
             <Card className="card container" bg="transparent" style={{ width: '50em' }}>
                <Card.Body>
                <Card.Title>Jodi Lynn</Card.Title>
                
                <Card.Text className="card-text">
                    
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        )
    }
}