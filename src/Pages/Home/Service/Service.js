import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css'
const Service = props => {
    const { name, image, description } = props.service;
    return (
        <div>
            <Col className='card box-shadow'>
                {/* single service card */}
                <Card>
                    <Card.Img className='img-fluid' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='my-2'>{name}</Card.Title>
                        <Card.Text className='text-secondary'>
                            {description.slice(0, 90)}
                        </Card.Text>
                        <Button className="my-2" variant="danger">Book Now</Button>
                    </Card.Body>
                </Card>
            </Col >
        </div>
    );
};

export default Service;