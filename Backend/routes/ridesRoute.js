import express from 'express';
import { Ride } from '../models/rideModel.js'

const router = express.Router();

// Route to add a new ride
router.post('/', async (request, response) => {
    try {
        // Check for all required fields
        if (
            !request.body.riderName ||
            !request.body.trailName 
        ){
            return response.status(400).send({
                message: "Send all required fields: riderName and trailName",
            });
        }
        const newRide = {
            riderName: request.body.riderName,
            trailName: request.body.trailName,
            trailDifficulty: request.body.trailDifficulty,
            rideDate: request.body.rideDate,
            rideGPSData: request.body.rideGPSData,
        };

        const ride = await Ride.create(newRide);
        return response.status(201).send(ride);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route to get all rides from database
router.get('/', async (request, response) => {
    try{
        // This empty object gets all rides
        const rides = await Ride.find({});
        return response.status(200).json({
            count: rides.length,
            data: rides
        });
    } catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route to get an estimated number of rides in the Rides collection
router.get('/count', async (request, response) => {
    try {
        const ridesCount = await Ride.estimatedDocumentCount();
        return response.status(200).json({ count: ridesCount })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

// Route to get ride by ID
router.get('/:id', async (request, response) => {
    try{
        const { id } = request.params;
        const ride = await Ride.findById(id);
        return response.status(200).json(ride);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
})

// Route to update a ride
router.put('/:id', async (request, response) => {
    try {
        // Check that we got all required fields for a ride
        if (
            !request.body.riderName ||
            !request.body.trailName
        ){
            return response.status(400).send({
                message: "Send all required fields: riderName and trailName",
            });
        }
        const { id } = request.params;
        const result = await Ride.findbyIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: `Ride ID: ${id} not found`});
        }
        return response.status(200).send({ message: `Ride ${id} updated`});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route to delete a ride
router.delete('/:id', async (request, response) => {
    try{
        const { id } = request.params;
        const result = await Ride.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: `Ride ${id} not found` });
        }
        return response.status(200).send({ message: `Ride ${id} deleted successfully` });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})
export default router;