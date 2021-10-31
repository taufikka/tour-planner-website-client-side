import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    const [loader, setLoader] = useState(false);

    // all services load from database
    useEffect(() => {
        setLoader(true)
        fetch('https://nameless-journey-96860.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => setLoader(false))
    }, [])


    // all services show card
    return (
        <div className='my-4'>
            <h4 className='my-5 fw-bolder text-center border border-danger border-3 w-50 mx-auto p-2'>Activities to help you explore Singapore</h4>

            {loader &&
                <div className='text-center'>
                    <div className="spinner-grow" role="status"><span className="visually-hidden">Loading...</span></div>
                </div>
            }

            <Container>
                <Row xs={1} md={2} lg={3} className='g-4'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;