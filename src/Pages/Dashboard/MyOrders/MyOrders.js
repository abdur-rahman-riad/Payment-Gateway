import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyOrderItem from '../MyOrderItem/MyOrderItem';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();
    const email = user.email;

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [myOrders]);

    return (
        <div className="container">
            <h3 className="text-center fw-bold fst-italic mb-4">Hello <span className="text-success">{user.email && user.displayName}</span> ! Here is Your Orders</h3>

            <div className="row">
                {
                    myOrders.map(orders => <MyOrderItem
                        key={orders._id}
                        orders={orders}
                    />)
                }
            </div>
        </div>
    );
};

export default MyOrders;