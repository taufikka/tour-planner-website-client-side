import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './BookDetails.css'


const BookDetails = () => {
    const { id } = useParams();
    const { user } = useAuth()

    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = 'https://nameless-journey-96860.herokuapp.com/tours';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();

    /* take input and send to server */
    const onSubmit = data => {
        //console.log(data)
        axios.post('https://nameless-journey-96860.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset();
                }
            })
    };
    // service book and service more details show
    return (
        <>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2'>
                <div className='col'>
                    <h2 className='text-center my-3 fw-bolder'>Tour Place Book</h2>
                    <div className='text-center my-4 mx-auto p-4 border custom-width'>
                        {services.map(service => service._id == id ?
                            <form key={service._id} onSubmit={handleSubmit(onSubmit)}>

                                <input  {...register("name")}
                                    value={user.displayName}
                                    placeholder="Name"
                                    className='p-2 m-1' required />
                                <br />

                                <input  {...register("email")}
                                    value={user.email}
                                    placeholder="email"
                                    className='p-2 m-1' />
                                <br />

                                <input  {...register("place")}
                                    value={service.name}
                                    placeholder="tour-place"
                                    className='p-2 m-1' />

                                <br />

                                <input  {...register("address")}
                                    placeholder="Your address"
                                    className='p-2 m-1' required
                                />
                                <br />
                                <input  {...register("phone")}
                                    placeholder="Phone number"
                                    className='p-2 m-1' required
                                />

                                <br />
                                <input  {...register("date")}
                                    type='date'
                                    placeholder="Date"
                                    className='p-3 m-1' required
                                />

                                <br />

                                <input type="submit" className='btn btn-danger w-50 mt-2' />

                            </form> : <div></div>)}
                    </div>
                </div>
                <div className='col'>
                    <div>
                        {services.map(service => service._id == id ?

                            <div className="card mx-auto mb-3 w-50 mt-5 border-0">
                                <img src={service.image} className="img-fluid" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"><strong>Information:</strong> {service.description}</p>
                                </div>
                            </div>

                            : <div></div>)}
                    </div>
                </div>
            </div>
        </>

    );
};

export default BookDetails;