const express = require('express');
const { addExpenses, getExpense, deletedExpense } = require('../controllers/expenseController');
const router = express.Router();
router.post('/',addExpenses)
router.get('/get-expenses',getExpense)
router.delete('/:id/delete-expense',deletedExpense)
module.exports = router