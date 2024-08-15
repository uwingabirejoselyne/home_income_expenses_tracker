const express = require('express');
const { addExpenses, getExpense } = require('../controllers/expenseController');
const router = express.Router();
router.post('/',addExpenses)
router.get('/get-expenses',getExpense)
module.exports = router