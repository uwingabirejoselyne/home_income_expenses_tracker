const express = require('express')
const router = express.Router()
const {addIncome, getIncomes, deletedIncome } = require('../controllers/incomeController')
router.post('/',addIncome)
router.get('/getIncomes',getIncomes)
router.delete('/:id/delete-income',deletedIncome)

module.exports = router;