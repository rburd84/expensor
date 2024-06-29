import { useState, useEffect } from "react";
import "./Expenses.css";

function Expense({ description, budget, actual, budgetAmt }) {
  const [expenseBudget, setExpenseBudget] = useState(0);

  function handleBudget(e) {
    e.preventDefault();
    // console.log(e.target);
    const expenseEl = e.target.parentElement;
    const expenseElDesc = e.target.parentElement.firstElementChild.textContent;
    console.log(expenseEl);
    console.log(expenseElDesc);
    // console.log(e.target.parentElement.firstElementChild);

    // if (e.target.className === "budget") {
    //   e.target.innerHTML = budget;
    //   // console.log(e.target);
    // }
  }

  useEffect(() => {
    const budgets = document.querySelectorAll(".budget");

    budgets.forEach(budget => budget.addEventListener("click", handleBudget));
    // console.log(budgets);
    // console.log(budgetAmt);
  });
  return (
    <tr>
      <td className="description">{description}</td>
      <td className="budget">{budgetAmt ? budgetAmt : budget}</td>
      <td className="actual">
        <span className="currency">$</span>
        <span className="amount">{actual}</span>
      </td>
    </tr>
  );
}
export default Expense;
