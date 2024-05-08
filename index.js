const express = require('express');
const randomNumberRoutes = require('./routes/randomNumberRoutes');

const app = express();
const port = 3000;

app.use('/api', randomNumberRoutes);

app.get('/', function(req, res) => {
    res.send('Welcome to the Random Number API!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
