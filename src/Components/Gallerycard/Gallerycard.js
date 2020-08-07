import React from 'react'
import { CardColumns } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import './Gallerycard.css'

export default function Gallerycard(props) {

    const imageUrl = props.imageUrl;

    return (
        <CardColumns className="container">
            <Card>
                <Card.Img variant="top" src={imageUrl} />

            </Card>
            <Card className="p-3">
                <Card.Img variant="top" src={imageUrl} />
            </Card>
            <Card className="p-2">
                <Card.Img variant="top" src={imageUrl} />

            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                    <p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.”</p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            Aaron Siskind <cite title="https://petapixel.com/2014/05/29/70-inspirational-quotes-photographers/"></cite>
                        </small>
                    </footer>
                </blockquote>
            </Card>
            <Card className="text-center">
                <Card.Img variant="top" src={imageUrl} />
            </Card>
            <Card>
                <Card.Img variant="top" src={imageUrl} />
            </Card>
            <Card className="text-right">
                <Card.Img variant="top" src={imageUrl} />
            </Card>
            <Card>
                <Card.Img variant="top" src={imageUrl} />
            </Card>
        </CardColumns>
    );
}