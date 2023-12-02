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
    <div className="flex">
        <div>Five Most Recent Rides</div>
        <div>
        <table className='w-full border-separate border-spacing-3 rounded-xl conten-end'>
            <thead>
                <tr>
                    <th className='border border-orange-600 rounded-md'>Rider Name</th>
                    <th className='border border-orange-600 rounded-md'>Trail Name</th>
                    <th className='border border-orange-600 rounded-md'>Trail Difficulty</th>
                    <th className='border border-orange-600 rounded-md'>Ride Date</th>
                </tr>
            </thead>
            <tbody>
                {rides.map((ride, index) => (
                    <tr key={ride._id}>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {ride.riderName}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {ride.trailName}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {ride.trailDifficulty}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {ride.rideDate}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default Home