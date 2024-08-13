const Income = require('../models/incomeModel');
const asyncHandler = require("express-async-handler");

const addIncome = asyncHandler(async (req, res) => {
    const {title,amount,date,category,description } = req.body
    if(!title || !amount || !date || !category|| !description){
        return res.status(400).json({message:'All fields are required'});
    }
    try {
        const newIncome = await Income.create(req.body);
        res.status(201).json(newIncome);
      } catch (error) {
        res.status(500).json({ message: 'Failed to create income', error: error.message });
      }
 
})
module.exports ={addIncome}
