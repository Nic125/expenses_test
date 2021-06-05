import {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props){
    const expenses = props.expenses
    const [selectedYear, setSelecetedYear] = useState('2020');

    const filteredExpense = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    function onYearSelected(onYearSelected){
        setSelecetedYear(onYearSelected)
    };

    return(
        <li>
        <Card className="expenses">
        <ExpenseFilter onYearSelected={onYearSelected} selected={selectedYear} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList expenses={filteredExpense} />
        </Card>
        </li>
    )
}

export default Expenses;