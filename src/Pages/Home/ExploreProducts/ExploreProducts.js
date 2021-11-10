import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const ExploreProducts = () => {

    const [exploreProducts, setExploreProducts] = useState([]);
    useEffect(() => {
        fetch("/products.json")
            .then(response => response.json())
            .then(data => setExploreProducts(data))
    }, []);

    return (
        <>
            <Header></Header>
            <Container className="my-3 py-3">
                <h3 className="text-center fw-bold text-success fst-italic">Explore Our All Products</h3>
                <div className="row g-3">
                    {
                        exploreProducts.map(product => <SingleProduct
                            key={product.key}
                            product={product}
                        ></SingleProduct>)
                    }
                </div>

                <div className="text-center mt-5">
                    <Link to="/">
                        <button className="btn btn-primary ">Back to the Home</button>
                    </Link>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ExploreProducts;