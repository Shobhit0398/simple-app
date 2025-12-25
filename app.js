const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hey my changes are live instantly !');
});

app.listen(3001, () => console.log('App running on port 3000'));
