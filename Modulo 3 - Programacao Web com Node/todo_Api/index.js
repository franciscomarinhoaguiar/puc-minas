const express = require('express');
const app = express();
const userRoutes = require('./src/routes/user');

//const port = process.env.PORT || 3000;
const port = 3000;
app.use(express.json());
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server Running : ${port}`);
});
