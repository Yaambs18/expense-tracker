import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css'

function Expenses(props) {
    const expenseComp = [];
    for (const expense of props.expenses) {
      expenseComp.push(<ExpenseItem key={expense.id} expense={expense}></ExpenseItem>);
    }
    return (
        <Card className="expenses">
            {expenseComp}
        </Card>
    )
}

export default Expenses;