const router = require("express").Router();
const Workout = require("../models/workout");

// GET Route for /api/workouts
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {totalDuration: {$sum: '$excercises.duration'}}
        }
    ])
    .sort({day: -1})
    .limit(1)
    .then(dbWorkout => {
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

// PUT Route for /api/workouts/:id
router.get('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true, runValidators: true})
    .then (dbWorkout => {
        res.status(200).json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});



module.exports = router;