import mongoose from "mongoose";

const rideSchema = mongoose.Schema(
    {
        riderName: {
            type: String,
            required: true,
        },
        trailName: {
            type: String,
            required: true,
        },
        // Use an enum or something to map difficulty integer to strings,
        // i.e. 1 == green, 2 == blue, 3 == black diamond, etc
        trailDifficulty: {
            type: Number,
            required: false,
        },
        rideDate: {
            type: Date,
            required: false,
        },
        // TODO: actually implement this, I'm thinking maybe an array of objects
        // with each object holding a gps location plus a timestamp? Idk how
        // GPS data works, but I assume it's something like that
        rideGPSData: {
            type: Array,
            required: false,
        }
    }
)

export const Ride = mongoose.model('ride', rideSchema);