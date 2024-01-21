import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {

    const expenseObj = {
        title: '',
        amount: '',
        location: '',
        date: '',
    }

    const [enteredTitle, setTitle] = useState(expenseObj.title);
    const [enteredAmount, setAmount] = useState(expenseObj.amount);
    const [enteredLocation, setLocation] = useState(expenseObj.location);
    const [enteredDate, setDate] = useState(expenseObj.date);
    // const [enteredExpense, setExpense] = useState(expenseObj);

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        const newTitle = event.target.value;
        setTitle(newTitle);
        // setExpense({
        //     ...enteredExpense,
        //     title: newTitle
        // })
        // setExpense((prevState) => {
        //     return { ...prevState, title: newTitle };
        // })
    };
    const amountChangeHandler = (event) => {
        // console.log(event.target.value);
        const newAmount = event.target.value;
        setAmount(newAmount);
        // setExpense({
        //     ...enteredExpense,
        //     amount: newAmount
        // })
    };
    const locationChangeHandler = (event) => {
        // console.log(event.target.value);
        const newLocation = event.target.value;
        setLocation(newLocation);
        // setExpense({
        //     ...enteredExpense,
        //     location: newLocation
        // })
    };
    const dateChangeHandler = (event) => {
        // console.log(event.target.value);
        const newDate = event.target.value;
        setDate(newDate);
        // setExpense({
        //     ...enteredExpense,
        //     date: newDate
        // })
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        expenseObj.title = enteredTitle;
        expenseObj.amount = enteredAmount;
        expenseObj.location = enteredLocation;
        expenseObj.date = new Date(enteredDate);
        console.log(expenseObj);
        // console.log(enteredExpense);
        setTitle('');
        setAmount('');
        setLocation('');
        setDate('');
    }

    return (
        <form>
            <div className="expense-form">
                <div className="form-item">
                    <label>Title: </label>
                    <input placeholder="Title" id="title" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="form-item">
                    <label>Amount: </label>
                    <input placeholder="Amount" type="number" min="0.01" step="0.01" id="amount" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="form-item">
                    <label>Location: </label>
                    <input placeholder="Location" id="location" value={enteredLocation}  onChange={locationChangeHandler}/>
                </div>
                <div className="form-item">
                    <label>Date: </label>
                    <input placeholder="Date" id="date" type="date" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="add-expense">
                    <button id="submitBtn" type="submit" onClick={submitFormHandler}>Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;