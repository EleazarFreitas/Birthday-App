const { Router } = require('express');
const BirthdayController = require('../controllers/BirthdayController');

const router = Router();

router.get('/birthdays', BirthdayController.getAllBirthdays);
router.get('/birthdays/:id', BirthdayController.getAsingleBirthday);
router.post('/birthdays', BirthdayController.createAbirthday);
router.put('/birthdays/:id', BirthdayController.updateAbirthday);
router.delete('/birthdays/:id', BirthdayController.destroyAbirthday);

module.exports = router;