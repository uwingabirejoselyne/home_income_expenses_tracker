import React, { useContext, useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:5000/income";  

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{
    const [incomes,setIncomes] = useState([])
    const [expenses,setExpenses] = useState([])
    const [error,setError] = useState(null)

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}/addIncome`, income);
            
            console.log("Income added successfully:", response.data);
    
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("An unexpected error occurred");
            }
        }
    };
    
    
    return (
        <GlobalContext.Provider value ={{addIncome}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext);
}