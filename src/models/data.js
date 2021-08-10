'use strict';

const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  birth: { type: String, required: true },
  country: { type: String, required: true },
  university: { type: String, required: true },
  programmingLanguage: { type: String, required: true },
});

const Data = mongoose.model('data', dataSchema);

module.exports = Data;
