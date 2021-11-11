import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Booking = () => {
    const { id } = useParams();
    const [bookingInfo, setBookingInfo] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(response => response.json())
            .then(data => setBookingInfo(data))
    }, []);

    const bookingProduct = bookingInfo.find(product => product.key === id);


    return (
        <>
            <Header></Header>
            <div className="text-center my-3">
                <h2>Purchase ID: {id}</h2>
                <h1>{bookingProduct?.name}</h1>
                <img src={bookingProduct?.img} width="450px" alt="" />
                <br />
                <Link to="/exploreproducts">
                    <button className="btn btn-primary mt-5 ">Back to the Home</button>
                </Link>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Booking;