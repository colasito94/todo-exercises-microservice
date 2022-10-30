'use strict';

const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.json());

// For Microservice Page
app.get("/", (req, res) => {
    res.json(req.body);
});

// Response for API Gateway Page
app.post("/", (req, res) => {
    // console.log(req.body)
    res.json(req.body.exercises.filter(exercise => exercise.urgency == "Very"));
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
