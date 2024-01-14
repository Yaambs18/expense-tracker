import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(props) {

    // return React.createElement(Card, {className: "expense-item"},
    // React.createElement(ExpenseDate, {date: props.expense.date}),
    // React.createElement(ExpenseDetails, {expense: props.expense}));

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expense.date} />
            <ExpenseDetails expense={props.expense} />
        </Card>
    )
}

export default ExpenseItem;