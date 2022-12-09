const database = require('../models');

class BirthdayController {

    static async getAllBirthdays (req, res) {
        try {
            const allBirthdays = await database.Birthdays.findAll();
            return res.status(200).json(allBirthdays);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = BirthdayController;