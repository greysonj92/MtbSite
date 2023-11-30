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

export default router;