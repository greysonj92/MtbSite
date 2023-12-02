import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [rides, setRides] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/books/lastfive')
    })
  return (
    <div><h1>Home</h1></div>
  )
}

export default Home