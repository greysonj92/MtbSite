import express, { response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Ride } from './models/rideModel.js'
import ridesRoute from './routes/ridesRoute.js'
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
app.use(cors());

// HTTP GET '/', just a test that this works
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('/ Works!');
});

app.use('/rides', ridesRoute);
mongoose
    // TODO: add the mongoDBURL constant to config.js
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to remote MongoDB")
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });