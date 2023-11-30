import express from "express";
import mongoose from "mongoose";
import { PORT } from "./config.js";
import { Ride } from './models/rideModel.js'

const app = express();

// Middleware for parsing request body
app.use(express.json());

// HTTP GET '/', just a test that this works
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('/ Works!');
});

// TODO: implement this router
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