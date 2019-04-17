const Joi = require('joi');
const { assign } = require('lodash');

const numberQuery = {
  input: Joi.number().required().min(0)
};

const list = assign({}, { query: numberQuery });

module.exports = {
  list
};