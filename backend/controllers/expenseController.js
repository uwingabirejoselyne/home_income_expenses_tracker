const Expense = require('../models/expenseModel')
const asyncHandler = require("express-async-handler");


const addExpenses = asyncHandler(async(req,res)=>{
    const { title, amount, date, category, description } = req.body
    try {
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'amount must be positive' });
        }
        const newExpense = await Expense.create(req.body);
        res.status(201).json(newIncome);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create expense', error: error.message });
    }

})

module.exports ={addExpenses}