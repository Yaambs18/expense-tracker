import React, { useState } from 'react';
import './ExpenseItem.css'

const ExpenseDetails = (props) => {

    const  [title, setTitle] = useState(props.expense.title);
    const  [amount, setAmount] = useState(props.expense.amount);
    
    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }

    const priceClickHandler = () => {
        setAmount(100);
        console.log(title);
    }

    return (
        <>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__location'>{props.expense.location}</div>
                <div className='expense-item__price'>₹ {amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={priceClickHandler}>Change Amount</button>
        </>
    )
}

export default ExpenseDetails;