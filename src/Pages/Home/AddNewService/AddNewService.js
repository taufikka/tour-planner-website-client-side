import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewService = () => {

    const { register, handleSubmit, reset } = useForm();

    /* take input and send to server */
    const onSubmit = data => {
        axios.post('https://nameless-journey-96860.herokuapp.com/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")
                    reset();
                }
            })
    };

    // add new service form
    return (
        <div className='login-container my-5'>
            <h2 className='text-center fw-bolder'>Add New Service</h2>
            <div className='text-center mx-auto p-4 border custom-width'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input  {...register("image")}
                        placeholder="Image url"
                        className='p-2 m-1' required />
                    <br />

                    <input  {...register("name")}
                        placeholder="Place name"
                        className='p-2 m-1' required />
                    <br />

                    <input  {...register("description")}
                        placeholder="Description"
                        className='p-2 m-1' required
                    />

                    <br />
                    <input type="submit" className='btn btn-danger w-25 p-2 mt-2' />

                </form>
            </div>
        </div>
    );
};

export default AddNewService;