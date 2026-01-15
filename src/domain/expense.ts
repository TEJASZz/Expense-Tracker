import type { Category, Expense} from "../types/expense"


export type ExpenseInput =  {
  title: string,
  amount: number,
  category: Category,
  date: string
}

export function createExpense(input: ExpenseInput): Expense {
  return {
    id: crypto.randomUUID(),
    title: input.title.trim(),
    amount: input.amount,
    category: input.category,
    date: input.date
  }
}

export function isValidExpense(input: ExpenseInput): boolean {
  return (
    input.title.trim().length > 0 &&
    input.amount > 0 && 
    Boolean(input.date)
  )
}