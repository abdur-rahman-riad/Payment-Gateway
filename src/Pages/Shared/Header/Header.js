import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import avatar from '../../../images/avatar.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();


    return (
        <>
            <Navbar className="shadow-sm" sticky="top" bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo}
                            width="120"
                            height="60"
                            alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link className="fw-bold text-success" as={Link} to="/">Home</Nav.Link>

                        {user?.email ?
                            <>
                                <Nav.Link className="fw-bold text-success" as={Link} to="/dashboard">Dashboard</Nav.Link>

                                <Nav.Link className="fw-bold text-danger" onClick={logOut}>Logout</Nav.Link>

                                <Navbar.Text className="ms-3 d-flex mt-2">
                                    <img src={avatar}
                                        width="28"
                                        height="28" alt="" />
                                    <h6 className="mt-1 ms-2">{user?.displayName ? user?.displayName : user?.email}</h6>
                                </Navbar.Text></>
                            :
                            <Nav.Link className="fw-bold text-success" as={Link} to="/login">Login</Nav.Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;