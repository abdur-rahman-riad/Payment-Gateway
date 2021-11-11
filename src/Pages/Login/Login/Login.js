import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { useLocation, useHistory } from "react-router-dom"
import { Divider } from '@mui/material';

const Login = () => {
    const { googleSignIn, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            }).finally(() => setIsLoading(false));
    }

    return (
        <>
            <Header></Header>
            <div className="text-center my-5 py-5">
                <h2>Please Login</h2>
                <Divider>Or</Divider>
                <button onClick={handleGoogleSignIn} className="btn btn-dark mt-3 ">Google Sign In</button>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;