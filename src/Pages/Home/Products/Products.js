import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/products.json")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const homeProducts = products.slice(0, 6);


    return (


        <>
            <Container className="my-3 py-3">
                <h3 className="text-center fw-bold text-success fst-italic">Our All Products</h3>
                <div className="row g-3">
                    {
                        homeProducts.map(product => <SingleProduct
                            key={product.key}
                            product={product}
                        ></SingleProduct>)
                    }
                </div>
            </Container>
        </>
    );
};

export default Products;