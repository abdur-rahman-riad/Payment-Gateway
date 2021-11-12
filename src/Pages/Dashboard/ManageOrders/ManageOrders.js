import React, { useEffect, useState } from 'react';
import OrderItem from '../OrderItem/OrderItem';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [orders]);

    return (
        <div className="text-center">
            <h3 className="fst-italic text-success">Manage all Orders</h3>

            <table class="table table-hover border">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Order By</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(orderItem => <OrderItem
                            key={orderItem._id}
                            orderItem={orderItem}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;
