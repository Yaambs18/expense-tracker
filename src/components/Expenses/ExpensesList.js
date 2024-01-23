import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    let expensesContent = <p>No Expenses Found.</p>;

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    else if (props.items.length === 1) {
        expensesContent = <h4 className="expenses-list__fallback">Only single Expense here. Please add more...</h4>
    }

    return (
        <ul className="expenses-list">
            {props.items.map(expense => (
                <ExpenseItem 
                    key={expense.id} 
                    expense={expense}
                />
            ))}
            {expensesContent}
        </ul>
    )
}

export default ExpensesList;