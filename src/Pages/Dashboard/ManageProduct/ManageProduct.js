import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://whispering-everglades-34016.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [products]);

    return (
        <div className="text-center">
            <h3 className="fst-italic text-success">Manage all Products</h3>

            <table class="table table-hover border">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Condition</th>
                        <th scope="col">Fuel Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(productItem => <ProductItem
                            key={productItem._id}
                            productItem={productItem}
                        />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;