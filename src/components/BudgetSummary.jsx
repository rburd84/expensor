import { useState } from "react";

export function BudgetSummary() {
  const [summary, setSummary] = useState({
    bills: 0,
    expenses: 0,
    savings: 0,
    debt: 0,
  });

  return (
    <>
      <table className="summary">
        <thead>
          <tr>
            <th colSpan="3">Budget Summary</th>
          </tr>
          <tr>
            <th className="table-heading">Description</th>
            <th className="table-heading">Budget</th>
            <th className="table-heading">Actual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="description">Bills</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td className="description">Expenses</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td className="description">Savings</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td className="description">Debt</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total Remaining</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Amount Spent</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
