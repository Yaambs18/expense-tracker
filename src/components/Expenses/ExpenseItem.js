import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const deleteClickHandler = (event) => {
        console.log(event.target.parentElement.remove());
        console.log('Deleted!!');
    }

    // return React.createElement(Card, {className: "expense-item"},
    // React.createElement(ExpenseDate, {date: props.expense.date}),
    // React.createElement(ExpenseDetails, {expense: props.expense}));

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expense.date} />
            <ExpenseDetails expense={props.expense} />
            <button onClick={deleteClickHandler}>Delete Expense</button>
        </Card>
    )
}

export default ExpenseItem;