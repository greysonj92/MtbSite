import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateRide from './pages/CreateRide';
import EditRide from './pages/EditRide';
import DeleteRide from './pages/DeleteRide';
import ShowRide from './pages/ShowRide';

const App = () => {
  return (
    <Routes>
     <Route path='/' element={<Home />} /> 
     <Route path='/rides/create' element={<CreateRide />} /> 
     <Route path='/rides/details/:id' element={<ShowRide />} /> 
     <Route path='/rides/edit/:id' element={<EditRide />} /> 
     <Route path='/rides/delete/:id' element={<DeleteRide />} /> 
    </Routes>
  )
}

export default App