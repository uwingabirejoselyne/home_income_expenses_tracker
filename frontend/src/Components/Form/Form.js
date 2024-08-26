import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/globalContext';

const Form = () => {
    const { addIncome } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputState((inputState) => ({
            ...inputState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { 
            ...inputState, 
            amount: parseFloat(inputState.amount)  
        };
        addIncome(data);
    };
    

    const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    gap:2rem;
    input,textarea,select{
    font-family:inherit;
    font-size:inherit;
    outline:none;
    border:none;
    padding:0.5rem 1rem;
    border-radius:5px;
    border:1px solid #fff;
    resize:none;
    box-shadow:0px 1px 15px rgba(0,0,0,0.06);
    color:rgba(34,34,96,0.9);
    &::placeholder{
    color:rgba(34,34,96,0.4);
    }
    }
    .input-control{
    input{
    width:100%;
    }
    }
    .selects{
    display:flex;
    justify-content:flex-end;
    select{
    color:rgba(34,34,96,0.4);
    &:focus,&:active{
    color:rgba(34,34,96,0.4);
    }
    }
    }
    .submit-btn{
    button{
    box-shadow:0px 1px 15px rgba(0, 0, 0,0.96);
    &:hover{
    background:var(--color-green)!important;
    }
    }
    }
    `;

    return (
        <StyledForm onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    type="text"
                    className="text"
                    value={title}
                    name="title"
                    placeholder="Salary title"
                    onChange={handleInput}
                />
            </div>
            <div className="input-control">
                <input
                    type="number"
                    className="text"
                    value={amount}
                    name="amount"
                    placeholder="Salary amount"
                    onChange={handleInput}
                />
            </div>
            <div className="input-control">
                <input
                    type="date"
                    className="text"
                    value={date}
                    name="date"
                    onChange={handleInput}
                />
            </div>
            <div className="selects input-control">
                <select
                    required
                    value={category}
                    name="category"
                    id="category"
                    onChange={handleInput}
                >
                    <option value="" disabled>Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bank">Bank</option>
                    <option value="youtube">YouTube</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} cols="30" rows="4" onChange={handleInput} id="">Description</textarea>
            </div>
            <div className="submit-btn">
                <button type="submit">Add Income</button>
            </div>
        </StyledForm>
    );
};

export default Form;
