import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../../images/banner.png';

const Banner = () => {
    return (
        <>
            <Container className="my-3">
                <div className="row gy-5 align-items-center">
                    <div className="col-md-7">
                        <h6 className="text-secondary fst-italic">SOME CONTENT ABOUT GALAXYCRAFT</h6>
                        <h2 className="fw-bold text-success fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                        <p className="text-secondary fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ipsam, dolorum sint quisquam facilis, aliquam numquam ducimus ad ab eaque autem! Blanditiis alias ipsum nisi velit aliquid maiores iure repellat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magni quas minus aperiam dolor, voluptatibus corrupti nesciunt natus obcaecati ducimus! </p>
                        <button className="btn btn-dark">Explore More</button>
                    </div>

                    <div className="col-md-5 text-center">
                        <img src={banner} width="90%" className="img-fluid" alt="" />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Banner;