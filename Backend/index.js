import express from "express";
import mongoose from "mongoose";
import { PORT } from "./config.js";
import { Ride } from './models/rideModel.js'

const app = express();

app.listen(PORT, () => {

})