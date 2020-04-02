const express = require('express');
const fetch = require('node-fetch');

// Express settings
const app = express();
const port = 5000;

// External API settings
const url = 'http://api.weatherstack.com/current';
const key = '6b7fdc45ea62ff6c7158b4720f442c52';

app.get('/', (req, res) => {
  res.send('The local server is working just fine.');
});

app.get('/api/weather/', (req, res) => {
  res.json({ error: 'Location required.' });
});

app.get('/api/weather/:location', (req, res) => {
  const { location } = req.params;

  // fetch data from the external API
  fetch(`${url}?access_key=${key}&query=${location}`)
    .then((data) => data.json())
    .then((data) => res.send(data));
});

app.listen(port, () => console.log(`Server started on port ${port}.`));
