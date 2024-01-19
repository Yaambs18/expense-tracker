import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <form>
            <div className="expense-form">
                <div className="form-item">
                    <label>Title: </label>
                    <input placeholder="Title" id="title" onChange={titleChangeHandler}/>
                </div>
                <div className="form-item">
                    <label>Amount: </label>
                    <input placeholder="Amount" type="number" min="0.01" step="0.01" id="amount"/>
                </div>
                <div className="form-item">
                    <label>Location: </label>
                    <input placeholder="Location" id="location"/>
                </div>
                <div className="form-item">
                    <label>Date: </label>
                    <input placeholder="Date" id="date" type="date"/>
                </div>
                <div className="add-expense">
                    <button id="submitBtn" type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;