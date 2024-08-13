const Income = require('../models/incomeModel');
const asyncHandler = require("express-async-handler");

const addIncome = asyncHandler(async (req, res) => {
    try {
        const newIncome = await Income.create(req.body);
        res.json(newIncome);
      } catch (error) {
        throw new Error(error);
      }
 
})
module.exports ={addIncome}
