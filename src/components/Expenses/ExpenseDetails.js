import './ExpenseItem.css'

const ExpenseDetails = (props) => {

    return (
        <div className='expense-item__description'>
            <h2>{props.expense.title}</h2>
            <div className='expense-item__location'>{props.expense.location}</div>
            <div className='expense-item__price'>₹ {props.expense.amount}</div>
        </div>
    )
}

export default ExpenseDetails;