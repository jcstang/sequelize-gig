const express = require('express');
const expressHandlerbars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 5000;

// Test DB
db.authenticate()
  .then(() => console.log('Database connected....'))
  .catch(err => console.log('Error ' + err));

app.get('/', (req, res) => {
  res.send('INDEX');
});

app.use('/gigs', require('./routes/gigs'));


app.listen(PORT, function() {
  console.log(`server started on port ${PORT}`);
});