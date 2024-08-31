const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
