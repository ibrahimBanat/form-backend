const server = require('./src/app');
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT || 5000;

// getting-started.js
mongoose
  .connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.start(port);
  });
