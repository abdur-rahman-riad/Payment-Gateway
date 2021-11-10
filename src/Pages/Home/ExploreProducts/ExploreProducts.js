import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';
import Header from '../../Shared/Header/Header';

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
            </Container>
        </>
    );
};

export default ExploreProducts;