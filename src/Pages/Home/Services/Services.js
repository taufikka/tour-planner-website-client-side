import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/trip.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-4'>
            <h4 className='my-5 fw-bolder text-center'>Activities to help you explore Singapore</h4>

            <Container>
                <Row xs={1} md={2} lg={3} className='g-4'>
                    {
                        services.map(service => <Service
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;