const friends = require('../Model/friends.model');

function getFriends(req, res) {
  res.json(friends);
}

function getAFriend(req, res) {
  const friendId = req.params.friendId;
  const friend = friends[+friendId];

  if (friend) res.json(friend);
  else
    res.status(404).send({
      error: 'Friend does not exist',
    });
}

function AddAFriend(req, res) {
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
}

module.exports = { getFriends, getAFriend, AddAFriend };
