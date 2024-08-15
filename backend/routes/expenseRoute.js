const express = require('express');
const { addExpenses } = require('../controllers/expenseController');
const router = express.Router();
router.post('/',addExpenses)
module.exports = router