import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import review from '../../../images/review.png';

const MakeReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };

    return (
        <div className="text-center">
            <h3 className="fst-italic fw-bold text-success">Make a Review</h3>

            <div className="row g-3 align-items-center">
                <div className="col-md-2">
                    <img src={review} className="img-fluid" width="100%" alt="" />
                </div>

                <div className="col-md-8">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-floating mb-2">
                            <input
                                {...register("name")}
                                type="text"
                                class="form-control"
                                id="name"
                                placeholder="Name"
                                defaultValue={user?.displayName}
                                required
                                readOnly />
                            <label for="name">Name</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input
                                {...register("profession")}
                                type="text"
                                class="form-control"
                                id="profession"
                                placeholder="profession"
                                required />
                            <label for="profession">Profession</label>
                        </div>

                        <div class="form-floating mb-2">
                            <input
                                {...register("rating")}
                                type="number"
                                class="form-control"
                                id="rating"
                                placeholder="Rating Out of 5"
                                required />
                            <label for="rating">Rating Out of 5</label>
                        </div>

                        <div class="form-floating mb-2">
                            <textarea
                                {...register("review")}
                                type="text"
                                id="review"
                                className="form-control"
                                placeholder="Write Your Valuable Review"
                                rows="3"
                                required />
                            <label for="rating">Write Your Valuable Review</label>
                        </div>

                        <input className="btn btn-dark w-100" type="submit" value="Post Review" />

                    </form>
                </div>

                <div className="col-md-2">
                    <img src={review} className="img-fluid" width="100%" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MakeReview;