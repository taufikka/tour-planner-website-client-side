import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            {/* home pages banner and title  */}
            <div className="bg-image">
                <div className="">
                    <div className='title-style'>
                        <div className='text-center'>
                            <h1 style={{ fontWeight: '1100', fontSize: '45px' }} className='fw-bold'>Life is Short and <span className='text-warning'>The World is Wide.</span></h1>
                            <p className='fw-bolder text-danger'>A journey of a 1000 miles starts with a single steps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;