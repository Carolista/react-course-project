import React from "react";
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const Expenses = () => {
  const list = expenses.map((expense) => {
    return (
      <ExpenseItem key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return (
    <Card className="expenses">
      {list}
    </Card>
  )
};

export default Expenses;