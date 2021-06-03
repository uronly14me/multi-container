// index.js
const express = require('express');
const app = express();
const startDate = new Date();

app.get('/', (req, res) => {
  res.send('This is Auth service')
})

app.listen(3000, () => console.log('Server is up and running', startDate));
