const database = require('../models');

class BirthdayController {

    static async getAllBirthdays (req, res) {
        try {
            const allBirthdays = await database.Birthdays.findAll();
            return res.status(200).json(allBirthdays);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async getAsingleBirthday (req, res) {
        const { id } = req.params;
        try {
            const aSingleBirthday = await database.Birthdays.findOne( { where: { id: Number(id) } } );
            return res.status(200).json(aSingleBirthday);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async createAbirthday (req, res) {
        const newBirthday = req.body;
        try {
            const newBirthdayCreated = await database.Birthdays.create(newBirthday);
            return res.status(200).json(newBirthdayCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async updateAbirthday (req, res) {
        const { id } = req.params;
        const newBirthdayInfos = req.body;
        try {
            await database.Birthdays.update(newBirthdayInfos, { where: { id: Number(id) } });
            const birthdayUpdated = await database.Birthdays.findOne( { where: { id: Number(id) } } );
            return res.status(200).json(birthdayUpdated);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async destroyAbirthday (req, res) {
        const { id } = req.params;
        try {
            await database.Birthdays.destroy( { where: { id: Number(id) } } );
            return res.status(200).send(`Birthday ${id} deleted!`);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

};

module.exports = BirthdayController;