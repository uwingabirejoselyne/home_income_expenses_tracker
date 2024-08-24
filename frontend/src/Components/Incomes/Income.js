import React, { useContext } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import { useGlobalContext } from '../../Context/globalContext'
import Form from '../Form/Form'

const Income = () => {
  const {addIncome} = useGlobalContext()
    const IncomeStyled = styled.div``
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Income</h1>
        <div className="income-content">
          <div className="form-container">
            <Form/>
          </div>
          <div className="incomes"></div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

export default Income
