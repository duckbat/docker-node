const express = require('express');
const connectDB = require('./db')
const Animals = require('./animal');

const app = express();
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send("API is working add '/animals' to the URL to get the animal list");
});

app.get('/animals', async (req, res) => {
    try {
        const animals = await Animals.find(); // Mongodb query to get all the animals
        res.json(animals);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});


const port = 3000;
const host = '0.0.0.0'

app.listen(port, host, () => {
    console.log("API server started on port 3000");
})