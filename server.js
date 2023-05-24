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
  {
    name: 'Jack',
    id: '2',
  },
];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
  console.log('request recieved');
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = req.params.friendId;
  const friend = friends[+friendId];

  if (friend) res.json(friend);
  else
    res.status(404).send({
      error: 'Friend does not exist',
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
