import { isValidElement, useState } from "react"
import type { Expense } from "./types/expense"
import { createExpense, isValidExpense, } from "./domain/expense"
import type {ExpenseInput} from "./domain/expense"
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from "./components/ExpenseList/ExpenseList";
import { Summary } from "./components/Summary/Summary";

const App = () => {

  const [expenses, setExpenses] = useState<Expense[]>([])


  function handleAddExpense(input: ExpenseInput){
    if(!isValidExpense(input)) return
    setExpenses(prev => [...prev,createExpense(input)])
  }
  return (
    <>
    <ExpenseForm onSubmit={handleAddExpense} /> 
    <ExpenseList expenses={expenses} />\
    <Summary expenses={expenses} />
    </>
  )
}

export default App