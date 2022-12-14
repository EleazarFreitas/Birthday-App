const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const birthdays = require('./birthdaysRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(birthdays);
    app.use(express.static(path.join(path.join(__dirname, '../../frontend'))))
};