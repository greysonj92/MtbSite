import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [rides, setRides] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/rides/last/5')
        .then((response) => {
            setRides(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);
    return (
    <div>
        <h1>Five Most Recent Rides</h1>
        <table >
            <thead>
                <tr>
                    <th>Rider Name</th>
                    <th>Trail Name</th>
                    <th>Trail Difficulty</th>
                    <th>Ride Date</th>
                </tr>
            </thead>
            <tbody>
                {rides.map((ride, index) => (
                    <tr key={ride._id}>
                        <td>
                            {ride.riderName}
                        </td>
                        <td>
                            {ride.trailName}
                        </td>
                        <td>
                            {ride.trailDifficulty}
                        </td>
                        <td>
                            {ride.rideDate}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default Home