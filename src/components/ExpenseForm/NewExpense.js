import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseHandler = enteredExpenseData => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expense);
    setShowFormComponent(false);
  };

  const [showFormComponent, setShowFormComponent] = useState(false);

  const addNewExpenseHandler = () => {
    setShowFormComponent(true);
  }

  const cancelExpenseHandler = () => {
    setShowFormComponent(false);
  }
  
  return (
    <div className='new-expense'>
      {!showFormComponent && (<button onClick={addNewExpenseHandler}>Add New Expense</button>)}
      {showFormComponent && (<ExpenseForm onSaveExpense={saveExpenseHandler} onCancelExpense={cancelExpenseHandler} />)}
    </div>
  );
};

export default NewExpense;