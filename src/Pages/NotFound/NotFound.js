import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Error from '../../images/error.PNG';

const NotFound = () => {
    return (
        <>
            <Container className="text-center my-5 py-5">
                <img src={Error} width="250px" className="mt-3 pt-3 img-fluid" alt="" />
                <h1 className="fw-bold text-danger">404 Page Not Found</h1>
                <Link to="/">
                    <button className="btn btn-secondary mt-3">Back to the Home</button>
                </Link>
            </Container>
        </>
    );
};

export default NotFound;