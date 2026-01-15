import type { Expense } from "../../types/expense"
import { ExpenseItem } from "../ExpenseItem/ExpenseItem"

interface ExpenseListProps {
  expenses: Expense[]
}

const ExpenseList = ({expenses}: ExpenseListProps) => {

  if (expenses.length === 0) {
    return <p>No Expense yet</p>
  }
  return (
    <div>
      {expenses.map(exp => (
        <ExpenseItem key={exp.id} expense={exp}/>
      ))}
    </div>
  )
}

export default ExpenseList