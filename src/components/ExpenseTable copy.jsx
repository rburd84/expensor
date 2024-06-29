import { useState, useEffect } from "react";
import Expense from "./Expense";
import ExpenseForm from "./Form";

function ExpenseTable({ title, expenses, budgetAmt, handleExpenseForm }) {
  const [total, setTotal] = useState(0);
  const [currentExpenses, setCurrentExpenses] = useState([]);
  const [addExpense, setAddExpense] = useState(false);

  useEffect(() => {
    let total = currentExpenses.reduce((prev, curr) => prev + +curr.amount, 0);
    setTotal(total);
  }, [currentExpenses]);

  useEffect(() => {
    const currCategory = expenses.filter(
      exp => exp.type.toLowerCase() === title.toLowerCase()
    );

    setCurrentExpenses(currCategory);
    // setCurrentType(title);

    // console.log(
    //   "Expenses: ",
    //   expenses,
    //   "Curr Expenses: ",
    //   currentExpenses,
    //   "Type: ",
    //   title
    // );
    // console.log(currCategory);
  }, [expenses, title]);

  return (
    <div className="container">
      <div className="action-buttons">
        <button
          type="button"
          onClick={() => {
            console.log(title);
            setAddExpense(true);
          }}
        >
          Add Table
        </button>
        <button type="button">Delete</button>
      </div>
      {addExpense && <ExpenseForm handleExpenseForm={handleExpenseForm} />}
      <table id={title.toLowerCase()}>
        <thead>
          <tr>
            <th colSpan="3">
              {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
            </th>
          </tr>
          <tr>
            <th className="table-heading">Description</th>
            <th className="table-heading">Budget</th>
            <th className="table-heading">Actual</th>
          </tr>
        </thead>
        <tbody>
          {currentExpenses.length > 0 &&
            currentExpenses.map(exp => (
              <Expense
                key={exp.name}
                description={exp.name}
                actual={exp.amount}
                budget={exp.budget}
                budgetAmt={budgetAmt}
              />
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Amount Spent</td>
            <td>0.00</td>
            <td>{total ? `$ ${total}` : "0.00"}</td>
          </tr>
          <tr>
            <td>Total Remaining</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default ExpenseTable;
