import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/user', { withCredentials: true })
            .then(response => setUser(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleLogout = () => {
        axios.get('http://localhost:5000/logout', { withCredentials: true })
            .then(() => {
                setUser(null);
                window.location.href = '/login';
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName}</h2>
                    <img src={user.photos[0].value} alt="Profile" />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}

export default Dashboard;
