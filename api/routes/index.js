const bodyParser = require('body-parser');
const cors = require('cors');
const birthdays = require('./birthdaysRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(birthdays);
};