import React from 'react';
import Avatar from '../../../images/avatar.png';
import Rating from '@mui/material/Rating';
import Quotes from '../../../images/quotes.png';

const SingleReview = (props) => {
    const { name, profession, rating, review } = props.review;

    return (
        <div className="col-md-4">
            <div className="px-3 py-4 text-center rounded h-100" style={{ boxShadow: "1px 1px 3px gray" }}>
                <img src={Quotes} width="25px" alt="" />
                <p className="fst-italic">{review}</p>
                <Rating name="read-only" value={rating} precision={0.5} readOnly />
                <br />
                <img src={Avatar} width="50px" alt="" />
                <h5 className="text-secondary mt-1 mb-0 fst-italic">{name}</h5>
                <h6 style={{ fontSize: "15px" }} className="text-secondary fst-italic">{profession}</h6>
            </div>
        </div>
    );
};

export default SingleReview;