'use strict';

const express = require('express');

const app = express();
const Data = require('../src/models/data');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('i am working at root ');
});
app.get('/getAll', (req, res) => {
  let userMap = {};
  Data.find({}, function (err, users) {
    // users.forEach(function (user) {
    //   userMap[entity] = user;
    // });

    res.json(users);
  });
});
app.post('/form', async (req, res) => {
  try {
    let {
      name,
      email,
      phone,
      birth,
      country,
      university,
      programmingLanguage,
    } = req.body;

    const data = new Data({
      name: name,
      email: email,
      phone: phone,
      birth: birth,
      country: country,
      university: university,
      programmingLanguage: programmingLanguage,
    });
    const record = await data.save();
    res.status(200).json(record);
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
});

function start(port) {
  app.listen(port, () => {
    console.log('app is working . . . ');
    console.log(`app is listening on http://localhost:${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
