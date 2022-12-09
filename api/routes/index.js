const bodyParser = require('body-parser');
const birthdays = require('./birthdaysRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(birthdays);
}