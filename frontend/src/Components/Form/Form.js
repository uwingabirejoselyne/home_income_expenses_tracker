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
        setInputState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(inputState);
    };

    const StyledForm = styled.form``;

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
                    type="text"
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
            <div className="submit-btn">
                <button type="submit">Add Income</button>
            </div>
        </StyledForm>
    );
};

export default Form;
