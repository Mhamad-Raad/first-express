const express = require('express');

const app = express();
const PORT = 3000;

const friendsController = require('./Controllers/friends.controller.js');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
  console.log('request recieved');
});

app.use(express.json());

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getAFriend);

app.post('/friends', friendsController.AddAFriend);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
