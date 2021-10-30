import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = props => {
    const { _id, name, image, description } = props.service;
    const url = `/service/${_id}`
    return (
        <div>
            <Col className='card box-shadow'>
                {/* single service card */}
                <Card>
                    <Card.Img className='img-fluid' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='my-2'>{name}</Card.Title>
                        <Card.Text className='text-secondary'>
                            {description.slice(0, 95)}
                        </Card.Text>
                        <Link to={url}>
                            <Button className="my-2" variant="danger">Book Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col >
        </div>
    );
};

export default Service;