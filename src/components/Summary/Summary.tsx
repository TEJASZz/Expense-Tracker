import  type { SummaryProps } from "./Summary.types"
import { totalAmount,amountByCategory } from "../../domain/summary"


export function Summary({ expenses} : SummaryProps){

  const total = totalAmount(expenses)
  const byCategory = amountByCategory(expenses)
  return (
    <div>
      <section>
      <h2>Summary</h2>

      <p>Total: {total}</p>

      <ul>
        {Object.entries(byCategory).map(([category, amount]) => (
          <li key={category}>
            {category}: {amount}
          </li>
        ))}
      </ul>
    </section>
    </div>
  )
}

