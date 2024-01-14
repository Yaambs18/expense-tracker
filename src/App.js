import React from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.css';

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
  return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
