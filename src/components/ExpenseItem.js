import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date();
    const expenseTitle = "Bike Fuel";
    const expenseAmount = 500;
    const locationOfExpense = "Aligarh";

    return (
        <div className='expense-item'>
            <div>{props.expense.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
            </div>
            <div className='expense-item__location'>{props.expense.locationOfExpense}</div>
            <div className='expense-item__price'>{props.expense.amount}</div>
        </div>
    )
}

export default ExpenseItem;