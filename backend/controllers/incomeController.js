const Income = require('../models/incomeModel');
const asyncHandler = require("express-async-handler");

const addIncome = asyncHandler(async (req, res) => {
    const { title, amount, date, category, description } = req.body
    try {
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'amount must be positive' });
        }
        const newIncome = await Income.create(req.body);
        res.status(201).json(newIncome);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create income', error: error.message });
    }

})

const getIncomes = asyncHandler(async(req,res)=>{
    try {
        const getIncomes = await Income.find().sort({createdAt:-1});
        res.status(200).json(getIncomes)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get income', error: error.message });
        
    }
})

const deletedIncome = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const deleteIncome = await Income.findByIdAndDelete(id);
      res.status(200).json({ message: 'Income deleted successfully', deletedIncome })
    } catch (error) {
      throw new Error(error);
    }
  })
module.exports = { addIncome,getIncomes,deletedIncome }
