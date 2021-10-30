import React from 'react';
import './Reviews.css'

import image1 from '../../../images/user1.jpg'
import image2 from '../../../images/user3.jpg'
import image3 from '../../../images/user2.jpg'

const Reviews = () => {
    return (
        <div className='container my-4'>
            <h2 className='mt-5 mb-3'>Client Reviews  <i className="far fa-comment-dots"></i></h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4'>
                <div className='col'>
                    <div className="card mb-3" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image1} className="image-size" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Rafi chowdhury</h5>
                                    <p className="card-text">Seriously impressed with the help I got from Adam at travelo. Found me something no one else would and was knowledgable and patient as I took ages deciding. Highly recommend</p>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p className="card-text"><small className="text-muted">13 oct, 2021</small></p>
                                        </div>
                                        <div className='text-warning'>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card mb-3" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image2} className="image-size" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Soha khan</h5>
                                    <p className="card-text">I’ve found Zac Hassan by far the most friendly staff at travelo.He always goes above and beyond making sure customers feel listened to and organising the best holidays.</p>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p className="card-text"><small className="text-muted">20 oct, 2021</small></p>
                                        </div>
                                        <div className='text-warning'>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card mb-3" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image3} className="image-size" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">David john</h5>
                                    <p className="card-text">Its my first booking experience with travel planners and i will admit, i was a little dubious after reading reviews... however my experience so far has been brilliant.</p>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p className="card-text"><small className="text-muted">25 oct, 2021</small></p>
                                        </div>
                                        <div className='text-warning'>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Reviews;