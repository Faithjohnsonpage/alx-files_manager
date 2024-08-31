const express = require('express');

const app = express();
const indexRoutes = require('./routes/index');

app.use('/', indexRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
