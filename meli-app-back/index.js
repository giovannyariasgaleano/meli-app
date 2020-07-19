const express = require('express');

const app = express();

// Routes
app.use('/items', require('./routes/items'));

app.listen(4000, () => {
    console.log('Start server on port 4000');
});