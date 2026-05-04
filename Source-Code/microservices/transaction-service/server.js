const express = require('express');
const app = express();

app.use(express.json());

app.post('/transfer', (req, res) => {
    const { amount } = req.body;
    res.json({ message: ⁠ Transferred ₹${amount} (Transaction Service) ⁠ });
});

app.listen(3002, () => {
    console.log("Transaction Service running on port 3002");
});
