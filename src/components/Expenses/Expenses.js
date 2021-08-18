import React, { useState } from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  const list = props.items.map((expense) => {
    return (
      <ExpenseItem key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  const [ filterYear, setFilterYear ] = useState("2021");
  const [ filteredList, setFilteredList ] = useState(list);

  const getFilteredList = () => {
    let filteredItems = props.items.filter((item) => {
      return String(item.date.getFullYear()) === filterYear;
    });
    return filteredItems.map((expense) => {
      return (
        <ExpenseItem key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  };

  const handleFilterChange = (event) => {
    setFilterYear(event.target.value);
    console.log(getFilteredList());
    setFilteredList(getFilteredList);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filterYear} handleChange={handleFilterChange} />
      {filteredList.length === 0 && <p>No results found.</p>}
      {filteredList.length > 0 && filteredList}
    </Card>
  )
};

export default Expenses;