// index.js
const express = require('express');
const app = express();
const startDate = new Date();

app.get('/', (req, res) => {
  res.send('This is api service!')
})

app.listen(5000, () => console.log('Server is up and running', startDate));
