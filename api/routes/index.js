const bodyParser = require('body-parser');
const birthdays = require('./birthdaysRoute');

module.exports = app => {
    app.use(bodyParser.urlencoded( { extended: true } ));
    app.use(birthdays);
};