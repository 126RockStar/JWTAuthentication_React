// import config from './config/config'
// import app from './express'
const mongoose = require('mongoose');
const config = require('./config/config');
const app  = require('./express');

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
    .then(()=>console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

