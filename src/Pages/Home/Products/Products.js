import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://whispering-everglades-34016.herokuapp.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const homeProducts = products.slice(0, 6);


    return (


        <>
            <Container className="my-3 py-3">
                <h3 className="text-center fw-bold fst-italic">Our All <span className="text-danger">Car Deals</span></h3>
                <p style={{ fontSize: "13px", marginTop: "-5px" }} className=" mb-4 text-center text-success fw-bold fst-italic">Build your deal to fit your needs</p>
                <div className="row g-3">
                    {
                        homeProducts.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </div>

                <div className="mt-3 mb-4 text-center">
                    <Link to="/exploreproducts">
                        <button className="btn btn-primary">View All Products</button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default Products;