const router = require('express').Router();
const addIncome = require('../controllers/incomeController')
router.post('/',addIncome)

module.exports = router;