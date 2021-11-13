import React from 'react';

const ProductItem = (props) => {
    const { _id, price, name, carCondition, fuelType, img } = props.productItem;

    // Delete a Booking
    const handleDeleteProduct = id => {
        const proceed = window.confirm("Are you sure, you want to delete this Product?");
        if (proceed) {
            const url = `https://whispering-everglades-34016.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Product Deleted Successfully.");

                    }
                })
        }
    }


    return (
        <tr>
            <td>
                <img src={img} className="img-thumbnail" width="60px" alt="Not Found Car Banner" />
            </td>
            <td>{name}</td>
            <td>{price} tk</td>
            <td>{carCondition}</td>
            <td>{fuelType}</td>

            <td>
                <button onClick={() => handleDeleteProduct(_id)} style={{ fontSize: "15px", padding: "3px 5px", border: "none", backgroundColor: "crimson", color: "white", borderRadius: "3px", marginRight: "3px" }}>Delete</button>
            </td>
        </tr>
    );
};

export default ProductItem;