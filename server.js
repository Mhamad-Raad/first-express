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

app.use(express.json());

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

app.post('/friends', (req, res) => {
  console.log(req.body.name);
  if (!req.body.name) {
    return res.status(400).send({
      error: 'Friend must have a name',
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);

  res.json(newFriend);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
