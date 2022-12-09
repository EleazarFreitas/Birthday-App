const { Router } = require('express');
const BirthdayController = require('../controllers/BirthdayController');

const router = Router();

router.get('/birthdays', BirthdayController.getAllBirthdays);
router.get('/birthdays/:id', BirthdayController.getAsingleBirthday);
router.post('/birthdays', BirthdayController.createAbirthday);

module.exports = router;