
const express = require('express');

const app = express();

// Middleware to accept JSON data
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Express Server is Running Successfully!');
});

// Start server on port 3000
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
