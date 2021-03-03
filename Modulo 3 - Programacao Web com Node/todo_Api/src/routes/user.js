const express = require('express');

const router = new express.Router();

router.get('/users', (req, res) => {
  console.log('users');
  const users = [{ name: 'joao' }, { name: 'pedro' }];
  res.status(200).send(users);
});
router.post('/users', (req, res) => {
  console.log('users-post');
  res.status(201).send({ name: 'carlos' });
});
router.get('/users/:id', (req, res) => {
  console.log(`users/:${req.params.id}`);

  const user = { name: 'joao' };
  res.status(200).send(user);
});

module.exports = router;
