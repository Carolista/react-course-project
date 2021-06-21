import React, { useState } from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const handleAddExpense = (expense) => {
  console.log(expense);
};

const Expenses = (props) => {

  // Still need to lift state here when changing actual data
  const [ filterYear, setFilterYear ] = useState("2021");

  const list = props.items.map((expense) => {
    return (
      <ExpenseItem key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilterYear(event.target.value);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterYear} handleChange={handleFilterChange} />
      {list}
    </Card>
  )
};

export default Expenses;