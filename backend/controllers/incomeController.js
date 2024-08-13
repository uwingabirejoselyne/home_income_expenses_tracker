const Income = require('../models/incomeModel');

const addIncome = async(req,res)=>{
    try {
        const newIncome = await Income.create(req.body);
        res.json(newIncome);
      } catch (error) {
        throw new Error(error);
      }
 
}
module.exports ={addIncome}
