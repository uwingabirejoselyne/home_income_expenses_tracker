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
        res.status(201).json({message:'new exense created',newExpense});
    } catch (error) {
        res.status(500).json({ message: 'Failed to create expense', error: error.message });
    }
})

const getExpense = asyncHandler(async(req,res)=>{
    try {
        const getExpense = await Expense.find().sort({createdAt:-1});
        res.status(200).json(getExpense)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get expense', error: error.message });
        
    }
})

const deletedExpense = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleteExpense = await Expense.findByIdAndDelete(id);
      res.status(200).json({ message: 'Expense deleted successfully', deleteExpense })
    } catch (error) {
      throw new Error(error);
    }
  })

module.exports ={addExpenses,getExpense,deletedExpense}