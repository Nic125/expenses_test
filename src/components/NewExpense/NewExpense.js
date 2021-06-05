import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props){

    const [show, setShow] = useState(false)
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    } 

    function clickHandler(){
        setShow(show => !show)
    }

    return(
    <div className="new-expense">
    {show ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} clickHandler={clickHandler} /> : <button onClick={clickHandler} >Add New Expense</button>}
    </div>
    )
};

export default NewExpense;