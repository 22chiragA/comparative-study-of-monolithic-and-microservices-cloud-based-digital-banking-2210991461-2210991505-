const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
    res.json({ message: "Login Success (Auth Service)" });
});

app.listen(3001, () => {
    console.log("Auth Service running on port 3001");
});
