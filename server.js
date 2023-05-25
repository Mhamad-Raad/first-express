const express = require('express');

const friendsRouter = require('./router/friends.router');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
  console.log('request recieved');
});

app.use(express.json());

app.use('/friends', friendsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
