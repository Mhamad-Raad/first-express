const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(`IP: ${req.ip}`);
  next();
});

friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getAFriend);
friendsRouter.post('/', friendsController.AddAFriend);

module.exports = friendsRouter;
