const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint example
app.get('/api/data', (req, res) => {
    const data = {
        message: "Welcome to the Smart Irrigation Dashboard API",
        status: "success"
    };
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});