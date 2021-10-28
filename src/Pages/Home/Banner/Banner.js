import React from 'react';
import './Banner.css';
import image from '../../../images/img3.jpg'

const Banner = () => {
    return (
        <div>
            {/* home pages banner and title  */}
            <div className="row">
                <div className="col-12 col-md-5 d-flex align-items-center ps-4">
                    <div className='text-center'>
                        <h1 className='fw-bold'>Life is Short and <span className='text-warning'>The World is Wide.</span></h1>
                        <p className='fw-bolder text-secondary'>A journey of a 1000 miles starts with a single steps.</p>
                    </div>
                </div>
                <div className="col-12 col-md-7 text-center">
                    <img className='w-75' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;