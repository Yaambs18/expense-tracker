import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/ExpenseForm/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(),
      location: 'Aligarh',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(), location: 'Aligarh', },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(),
      location: 'Aligarh',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(),
      location: 'Aligarh',
    },
  ];

  const [storedExpenses, setExpense] = useState(expenses);

  const addExpenseHandler = expense => {
    // console.log(expense);
    setExpense([expense, ...storedExpenses]);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={storedExpenses}/>
    </div>
  );
}

export default App;
