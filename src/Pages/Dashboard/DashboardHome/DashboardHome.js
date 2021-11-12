import React from 'react';
import useAuth from '../../../hooks/useAuth';
import dashboard from '../../../images/dashboard.png';

const DashboardHome = () => {
    const { user } = useAuth();

    return (
        <div className="text-center">
            <h3 className="fw-bold fst-italic text-secondary">Hello <span className="text-success">{user?.displayName}</span> ! Welcome to Your Dashboard</h3>
            <h4 className="text-secondary fst-italic">Explore all The Feature You Have</h4>

            <img className="img-fluid" width="60%" src={dashboard} alt="" />
        </div>
    );
};

export default DashboardHome;