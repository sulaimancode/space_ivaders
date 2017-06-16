const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = 9000;

app.listen(port, function() {
  console.log('Server started on port '+ port)
});
