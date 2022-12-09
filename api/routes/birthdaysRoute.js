const { Router } = require('express');
const BirthdayController = require('../controllers/BirthdayController');

const router = Router();

router.get('/birthdays', BirthdayController.getAllBirthdays);

module.exports = router;