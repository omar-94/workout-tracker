const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        defaults: Date.now
    },
    exercises: [
        {
            type: {
                type: String
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

