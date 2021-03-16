const express = require('express');
const User = require('../models/user');

const router = new express.Router();

router.get('/users', async (req, res) => {
  console.log('users');
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post('/users', async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
  console.log('users-post');
});
router.get('/users/:id', (req, res) => {
  console.log(`users/:${req.params.id}`);

  const user = { name: 'joao' };
  res.status(200).send(user);
});

module.exports = router;
