import "./Expenses.css";
import Expense from "./Expense";

export function Expenses({ expenses }) {
  // console.log(expenses);

  return (
    <>
      <table
        id="expenses"
        style={{ minWidth: "350px" }}
      >
        <thead>
          <tr>
            <th colSpan="3">Expenses</th>
          </tr>
          <tr>
            <th
              className="table-heading"
              colSpan={2}
            >
              Description
            </th>
            {/* <th className="table-heading">Budget</th> */}
            <th className="table-heading">Actual</th>
          </tr>
        </thead>
        <tbody>
          {/* <Expense
            description="Health"
            budget=""
            actual="125.78"
          /> */}
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Health/Medical
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Groceries
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Food
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Shopping
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Utilities
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Transportation
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Taxes
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Dining Out
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Entertainment
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Home
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Miscellaneous
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td
              className="description"
              colSpan={2}
            >
              Entertainment
            </td>
            {/* <td>&nbsp;</td> */}
            <td>0.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Amount Spent</td>
            {/* <td>0.00</td> */}
            <td>0.00</td>
          </tr>
          <tr>
            <td colSpan={2}>Total Remaining</td>
            {/* <td>0.00</td> */}
            <td>0.00</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
