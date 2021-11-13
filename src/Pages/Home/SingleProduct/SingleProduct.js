import React from 'react';
import { Link } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const SingleProduct = (props) => {
    const { _id, name, img, description, fuelType, mileage, price, carCondition } = props.product;


    return (
        <>
            <div className="col-md-4">
                <div className="card h-100 package-card">
                    <img src={img} style={{ height: "230px" }} alt="Not Found Product Banner" />
                    <div className="card-body">
                        <p style={{ padding: "2px 4px", borderRadius: "2px", fontSize: "13px" }} className="fw-bold mt-0 me-2 bg-danger d-inline text-white">{carCondition.toUpperCase()}</p>
                        <p style={{ padding: "2px 4px", borderRadius: "2px", fontSize: "13px" }} className="fw-bold me-2 bg-success d-inline text-white"> <SpeedIcon style={{ fontSize: "20px", marginBottom: "3px", marginLeft: "-4px" }} /> {mileage.toUpperCase()} Km</p>

                        <p style={{ padding: "2px 5px", borderRadius: "2px", fontSize: "13px" }} className="fw-bold me-2 bg-primary d-inline text-white"><LocalGasStationIcon style={{ fontSize: "20px", marginBottom: "3px", marginLeft: "-4px" }} />{fuelType.toUpperCase()}</p>

                        <h5 className="card-title my-2 fw-bold">{name}</h5>
                        <p className="card-text text-secondary" style={{ textAlign: "justify" }}>{description}</p>
                    </div>

                    <div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <h3 className="fw-bold text-dark">{price} tk</h3>
                            <Link to={`/booking/${_id}`}>
                                <button className="btn btn-dark"><BookmarkBorderIcon /> Order Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;