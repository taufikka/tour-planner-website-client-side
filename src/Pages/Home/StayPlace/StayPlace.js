import React from 'react';
import image from '../../../images/hotel.jpg'

const StayPlace = () => {
    return (
        <div className='container my-4'>
            <h2 className='mt-5 mb-3'>Where to stay in Singapore  <i className="fas fa-hotel"></i></h2>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <img className='w-100' src={image} alt="" />
                </div>
                <div className='col-12 col-md-6 my-3'>
                    <p className='text-secondary'>For leading chain hotels, head to the area around Orchard Road, considered the tourist center of Singapore due to its varied selection of rooms, good travel links, and tourist-focused businesses. At the eastern end of the road, you'll find more luxurious and expensive options, with hotels located in impressive colonial-era architecture. North and south of this main artery, backpacker hostels and budget hotels provide affordable rooms with basic facilities.</p>
                    <div className='border border-2 text-center p-2 w-75'>
                        <h4 className='text-primary'>Booking.com</h4>
                        <p>20 million rooms are at your fingertips!</p>
                        <button className='btn btn-outline-primary'>Find Hotels</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayPlace;