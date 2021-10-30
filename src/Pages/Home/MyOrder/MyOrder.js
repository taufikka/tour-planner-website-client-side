import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [deleted, setDeleted] = useState(null);

    const { user } = useAuth()

    useEffect(() => {
        fetch('https://nameless-journey-96860.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deleted])

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you confirm to cancel booking?');
        if (proceed) {
            const url = `https://nameless-journey-96860.herokuapp.com/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount) {
                        setDeleted(true)
                    } else {
                        setDeleted(false)
                    }
                })
        }
    }

    return (
        <div className='container my-4 login-container'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2'>
                {
                    orders.map(order => order.email === user.email &&
                        <div key={order._id} className='col'>
                            <div className="card" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">Booked by: {order.name}</h5>
                                    <h6 className="card-title"><strong>Email:</strong> <small>{order.email}</small></h6>
                                    <p className="card-title"><strong>Tour place:</strong> {order.place}</p>
                                    <p className="card-text"> <strong>Contact:</strong> {order.phone}</p>
                                    <p className="card-text"><strong> Booked date:</strong> {order.date}</p>
                                    <button onClick={() => handleDeleteOrder(order._id)} className='btn btn-danger'>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrder;


/*
<div class="card border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>


*/