const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Route to Auth Service
app.post('/login', async (req, res) => {
    const response = await axios.post('http://localhost:3001/login', req.body);
    res.json(response.data);
});

// Route to Transaction Service
app.post('/transfer', async (req, res) => {
    const response = await axios.post('http://localhost:3002/transfer', req.body);
    res.json(response.data);
});

app.listen(3003, () => {
    console.log("API Gateway running on port 3003");
});
