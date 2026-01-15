export type Category = "Food" | "Travel" | "Entertainment" | "Rent" | "Shopping" | "Others"

export interface Expense {
  id:string,
  title: string,
  amount: number,
  category: Category,
  date: string 
}

export interface ExpenseSummary {
  totalAmount: number,
  byCategory: Record<Category,number>
}

