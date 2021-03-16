const express = require('express');
const Task = require('../models/task');

const router = new express.Router();

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/tasks', async (req, res) => {
  console.log(req.body);
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/tasks/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findById(id);

    res.status(200).send(task);
  } catch (error) {
    res.status(404).send();
  }
});

router.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdate = ['description', 'completed'];
  const isvalidaOperation = updates.every((update) =>
    allowUpdate.includes(update)
  );

  if (!isvalidaOperation) {
    res.status(400).send({ error: 'Not allowed update this fields' });
  }
  console.log(req.body);

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    res.status(204).send();
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
