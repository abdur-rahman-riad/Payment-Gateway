import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://whispering-everglades-34016.herokuapp.com/reviews")
            .then(response => response.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="container">
            <h3 className="text-center fw-bold fst-italic mt-5 py-2">What Our <span className="text-danger">Customers Say</span> !</h3>
            <div className="row g-3">
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </div>
    );
};

export default Reviews;