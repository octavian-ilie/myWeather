const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('The local server is working just fine.');
});

app.get('/api/weather/:location', (req, res) => {
  const { location } = req.params;
  res.send(`The weather from ${location} will be shown here.`);
});

app.listen(port, () => console.log(`Server started on port ${port}.`));
