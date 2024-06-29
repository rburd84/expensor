import { useState, useEffect } from "react";
import TableForm from "./TableForm";

export function Savings({ expenses, tables, handleTableForm }) {
  console.log(expenses, tables);
  const [addExpense, setAddExpense] = useState(false);

  const expenseTotal = expense =>
    expenses
      .filter(exp => exp.type === expense)
      .reduce((acc, exp) => acc + +exp.amount, 0);

  return (
    <div className="container">
      <div className="action-buttons">
        <button
          type="button"
          onClick={() => setAddExpense(true)}
        >
          Add Expense
        </button>
        <button type="button">Delete</button>
      </div>
      {addExpense && <TableForm handleTableForm={handleTableForm} />}
      <table
        id="savings"
        style={{ width: "350px" }}
      >
        <thead>
          <tr>
            <th colSpan="3">Expenses</th>
          </tr>
          <tr>
            <th className="table-heading">Description</th>
            {/* <th className="table-heading">Budget</th> */}
            <th className="table-heading">Actual</th>
          </tr>
        </thead>
        <tbody>
          {tables.map(table => (
            <tr key={table}>
              <td className="description">{table}</td>
              {/* <td>&nbsp;</td> */}
              <td className="actual">
                <span className="currency">$</span>
                <span className="amount">{expenseTotal(table)}</span>
              </td>
              {/* <td>&nbsp;</td> */}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Amount Spent</td>
            {/* <td>0.00</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td>Total Remaining</td>
            {/* <td>0.00</td> */}
            <td>0.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
