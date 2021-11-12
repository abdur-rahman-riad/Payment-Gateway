import React from 'react';

const OrderItem = (props) => {
    const { _id, userName, productName, address, phoneNumber, img } = props.orderItem;

    // Delete a Booking
    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure, you want to delete this Order?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Order Deleted Successfully.");

                    }
                })
        }
    }

    return (
        <>
            <tr>
                <td>
                    <img src={img} className="img-thumbnail" width="60px" alt="Not Found Car Banner" />
                </td>
                <td>{productName}</td>
                <td>{userName}</td>
                <td>{address}</td>
                <td>{phoneNumber}</td>

                <td>
                    <button onClick={() => handleDeleteOrder(_id)} style={{ fontSize: "15px", padding: "3px 5px", border: "none", backgroundColor: "crimson", color: "white", borderRadius: "3px", marginRight: "3px" }}>Delete</button>

                    <button style={{ fontSize: "15px", padding: "3px 5px", border: "none", backgroundColor: "teal", color: "white", borderRadius: "3px", marginRight: "3px" }}>Approve</button>
                </td>
            </tr>
        </>
    );
};

export default OrderItem;