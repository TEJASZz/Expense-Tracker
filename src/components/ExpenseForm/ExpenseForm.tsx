import type { ExpenseFormProps } from './ExpenseForm.types'
import { useState } from 'react'
import type { Category } from '../../types/expense'

export default function ExpenseForm({onSubmit}: ExpenseFormProps) {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState<Category>("Food")
  const [amount,setAmount] = useState("")
  const [date, setDate] = useState("")

  function handleSubmit(e:React.FormEvent){
    e.preventDefault()

    onSubmit({
      title,
      amount: Number(amount),
      category,
      date
    })

    // Reset values
    setTitle("")
    setCategory("Food")
    setAmount("")
    setDate("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />


      <input 
        type="number"
        placeholder='Amount'
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select 
        value="Category"
        onChange={e => setCategory(e.target.value as Category)}  
      >
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Rent">Rent</option>
        <option value="Shopping">Shopping</option>
        <option value="Others">Others</option>
      </select>

      <input 
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />


      <button type="submit">Add Expense</button>
    </form>
  )
}
