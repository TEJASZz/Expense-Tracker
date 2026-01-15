import type { Expense } from "../../types/expense"

interface ExpenseItemProps {
  expense: Expense
}


export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  return (
    <div>
      <div>{expense.title}</div>
      <div>{expense.amount}</div>
      <div>{expense.category}</div>
      <div>{expense.date}</div>
    </div>
  )
}
