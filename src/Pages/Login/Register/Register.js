import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { useLocation, useHistory } from "react-router-dom"
import { Divider } from '@mui/material';
import RegisterVector from '../../../images/reg.svg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { googleSignIn, setUser, setIsLoading, registerUser, error, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    // Google Sign In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            }).finally(() => setIsLoading(false));
    }

    // On Change For Email and Password
    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }

    // Email and Password Registration
    const handleRegisterSubmit = event => {
        event.preventDefault();

        if (loginData.password.length < 6) {
            setError("Password must be at least 6 Character")
            return;
        }
        if (loginData.password !== loginData.confirmpassword) {
            alert("Password Did not Matched");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name);
        history.push(redirect_uri);

        document.getElementById('namelId').value = "";
        document.getElementById('emailId').value = "";
        document.getElementById('passId').value = "";
        document.getElementById('conPassId').value = "";


    }

    return (
        <>
            <Header></Header>
            <div className="container text-center py-3">

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3 className="text-success fst-italic fw-bold pb-4">Please Register</h3>

                        <form onSubmit={handleRegisterSubmit}>
                            <div className="mb-3">
                                <TextField
                                    fullWidth
                                    id="namelId"
                                    type="text"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    onBlur={handleOnBlur}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <TextField
                                    fullWidth
                                    id="emailId"
                                    type="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    onBlur={handleOnBlur}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <TextField
                                    fullWidth
                                    id="passId"
                                    type="password"
                                    name="password"
                                    label="Password"
                                    variant="outlined"
                                    onBlur={handleOnBlur}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <TextField
                                    fullWidth
                                    id="conPassId"
                                    type="password"
                                    name="confirmpassword"
                                    label="Confirm Password"
                                    variant="outlined"
                                    onBlur={handleOnBlur}
                                    required
                                />
                            </div>

                            <p className="text-center text-secondary">{error}</p>

                            <div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >Register</Button>
                                <Link to="/login">
                                    <Button
                                        className="my-2"
                                        variant="text"
                                    >Already Registerd? Login Here</Button>
                                </Link>

                            </div>

                        </form>






                        <Divider>Or</Divider>
                        <p style={{ fontSize: "13px" }} className="text-secondary mb-0 fst-italic">( In any case if you can't login with email and password, you can sign in with google )</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-dark mt-3 ">Google Sign In</button>
                    </div>

                    <div className="col-md-6 text-center">
                        <img src={RegisterVector} width="80%" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;