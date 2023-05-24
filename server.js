const express = require('express');

const app = express();
const PORT = 3000;

const friends = [
  {
    name: 'John',
    id: '0',
  },
  {
    name: 'Jane',
    id: '1',
  },
];

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
