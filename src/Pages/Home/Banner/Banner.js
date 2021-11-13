import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.png';
import './Banner.css';

const Banner = () => {
    const titlePromo = "Leading online automotive marketplace in Bangladesh";
    return (
        <>
            <Container className="my-3 py-3">
                <div className="row gx-3 gy-5 align-items-center">
                    <div className="col-md-7">
                        <h6 className="text-secondary fst-italic">{titlePromo.toUpperCase()}</h6>
                        <h2 className="fw-bold text-success fst-italic">Shop the nation’s largest <span className="text-danger">Brand New and Used Car</span> inventory</h2>
                        <p className="text-secondary fst-italic" style={{ textAlign: "justify" }}>GalaxyCraft is the first online cars classifieds website in Bangladesh. Easily and quickly buy and sell cars. You can easily find new and used cars for sale. If you want to buy a car in Bangladesh,and only have a small budget, you will find the best choices on GalaxyCraft. From small city cars to 4x4 SUV's, we have thousands of vehicles, for any budget. Finding the right car has never been this easy. Find hundreds of makes including Toyota, Lexus, Hyundai, Mercedes-Benz and more. </p>
                        <Link to="/exploreproducts">
                            <button className="btn btn-dark">Explore More</button>
                        </Link>
                    </div>

                    <div className="col-md-5 text-center">
                        <img src={banner} width="80%" className="img-fluid bannerImg" alt="" />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Banner;