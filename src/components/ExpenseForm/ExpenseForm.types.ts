import type { Category } from "../../types/expense"

export type ExpenseFormInput = {
  title: string,
  amount: number,
  category:Category,
  date:string
}


export interface ExpenseFormProps {
  onSubmit: (input: ExpenseFormInput) => void
}