const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World 123123');
});

app.listen(3000);
