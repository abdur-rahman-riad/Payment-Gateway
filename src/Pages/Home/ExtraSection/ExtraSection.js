import React from 'react';
import DealsCar from '../../../images/deal.PNG';
import { Link } from 'react-router-dom';

const ExtraSection = () => {
    return (
        <div className="container py-3 px-4" style={{ boxShadow: "1px 1px 3px lightgray" }}>
            <h3 className="text-center fw-bold fst-italic text-success mb-0">Control Your Car Buying Experience</h3>
            <p className="fw-bold text-center fst-italic mt-0 text-secondary">At GalaxyCraft, you're in charge of the process from start to finish. Here's how.</p>

            <div className="row my-2 align-items-center">
                <div className="col-md-6 text-center">
                    <img src={DealsCar} width="80%" className="img-fluid" alt="" />
                </div>

                <div className="col-md-6">
                    <h4 className="fw-bold">Build Your Deal With Confidence</h4>
                    <p className="text-secondary fst-italic">Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments.</p>
                    <Link to="/exploreproducts">
                        <button className="btn btn-dark">View Car Deals</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;