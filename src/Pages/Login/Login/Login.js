import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const { googleSignIn } = useAuth();


    return (
        <>
            <Header></Header>
            <div className="text-center my-5 py-5">
                <h2>Please Login</h2>
                <button onClick={googleSignIn} className="btn btn-dark mt-3 ">Google Sign In</button>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;