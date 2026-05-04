
const express = require('express');
const app = express();

app.use(express.json());

// Auth + Transaction + Account in ONE app

app.post('/login', (req, res) => {
    res.json({ message: "Login Success (Monolithic)" });
});

app.post('/transfer', (req, res) => {
    const { amount } = req.body;
    res.json({ message: ⁠ Transferred ₹${amount} (Monolithic) ⁠ });
});

app.get('/balance', (req, res) => {
    res.json({ balance: 5000 });
});

app.listen(3000, () => {
    console.log("Monolithic App running on port 3000");
});
