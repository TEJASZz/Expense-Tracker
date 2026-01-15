import type { Category, Expense} from "../types/expense"


export function totalAmount(expenses: Expense[]): number {
  return expenses.reduce((sum,e) => sum + e.amount,0)
} 

export function amountByCategory(expenses: Expense[]): Record<Category,number> {
  return expenses.reduce((acc,e) => {
    acc[e.category] = (acc[e.category] ?? 0) + e.amount
    return acc
  }, {} as Record<Category,number>)

}