import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const expenseComp = [];
    for (const expense of props.expenses) {
      expenseComp.push(<ExpenseItem key={expense.id} expense={expense}></ExpenseItem>);
    }

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenseComp}
        </Card>
    )
}

export default Expenses;