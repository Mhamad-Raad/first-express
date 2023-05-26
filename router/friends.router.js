const express = require('express');

//send files
// const path = require('path');
// res.sendFile(path.join(__dirname, '..', 'somwhere', 'somewhere'));


//using node as a serve
// we can use html templatings with this as well, keeping in mind the file extension should be the same
//also use mvc structure
// make a folder public for your html and css
// app.use('route here /site', express.static('public'));

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
