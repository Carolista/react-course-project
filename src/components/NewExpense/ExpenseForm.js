import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  }
  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  }
  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  }

  return (
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={handleTitleChange}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" onChange={handleAmountChange} min=".01" step=".01"/>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" onChange={handleDateChange} min="2019-01-01" max="2022-12-31" />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </div>
  )
}

export default ExpenseForm;