import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { useLocation, useHistory } from "react-router-dom"
import { Divider } from '@mui/material';
import LoginVector from '../../../images/login.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { googleSignIn, setUser, setIsLoading } = useAuth();
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
    const handleOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    // Login With Email and Password
    const handleLoginSubmit = event => {

        event.preventDefault();
    }

    return (
        <>
            <Header></Header>
            <div className="container text-center py-3">

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3 className="text-success fst-italic fw-bold pb-4">Please Login</h3>

                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                                <TextField
                                    fullWidth
                                    type="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <TextField
                                    fullWidth
                                    type="password"
                                    name="password"
                                    label="Password"
                                    variant="outlined"
                                    onChange={handleOnChange}
                                    required
                                />
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >login</Button>

                                <Button
                                    className="my-2"
                                    variant="text"
                                >Newbie? Register here</Button>
                            </div>

                        </form>






                        <Divider>Or</Divider>
                        <p style={{ fontSize: "13px" }} className="text-secondary mb-0 fst-italic">( In any case if you can't login with email and password, you can sign in with google )</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-dark mt-3 ">Google Sign In</button>
                    </div>

                    <div className="col-md-6 text-center">
                        <img src={LoginVector} width="80%" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;