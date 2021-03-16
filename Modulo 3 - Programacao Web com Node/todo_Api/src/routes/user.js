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

router.get('/users/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).send(user);
  } catch (error) {
    res.status(404).send();
  }
});

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdate = ['name', 'email', 'password', 'age'];
  const isvalidaOperation = updates.every((update) =>
    allowUpdate.includes(update)
  );

  if (!isvalidaOperation) {
    res.status(400).send({ error: 'Not allowed update this fields' });
  }
  console.log(req.body);

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
  console.log('users-patch');
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(204).send();
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
