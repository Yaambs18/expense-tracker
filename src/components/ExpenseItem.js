import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.expense.date} />
            <ExpenseDetails expense={props.expense} />
        </div>
    )
}

export default ExpenseItem;