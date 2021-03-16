const express = require('express');
require('./src/db/mongoose');
const app = express();
const userRoutes = require('./src/routes/user');
const taskRoutes = require('./src/routes/task');

//const port = process.env.PORT || 3000;
const port = 3000;
app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => {
  console.log(`Server Running : ${port}`);
});
