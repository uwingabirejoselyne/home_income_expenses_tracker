const express = require('express')
const router = express.Router()
const {addIncome, getIncomes } = require('../controllers/incomeController')
router.post('/',addIncome)
router.get('/getIncomes',getIncomes)

module.exports = router;