import Expense from "./Expense";

function ExpenseTable() {
  return (
    <table id="expenses">
      <thead>
        <tr>
          <th colSpan="3">Expenses</th>
        </tr>
        <tr>
          <th className="table-heading">Description</th>
          <th className="table-heading">Budget</th>
          <th className="table-heading">Actual</th>
        </tr>
      </thead>
      <tbody>
        <Expense
          description="Health"
          budget=""
          actual="125.78"
        />
        {/* <tr>
            <td className="description">Health/Medical</td>
            <td>&nbsp;</td>
            <td>0.00</td>
          </tr> */}
        <tr>
          <td className="description">Groceries</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Food</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Shopping</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Utilities</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Transportation</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Taxes</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Dining Out</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Entertainment</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Home</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Miscellaneous</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td className="description">Entertainment</td>
          <td>&nbsp;</td>
          <td>0.00</td>
        </tr>
      </tbody>
    </table>
  );
}
export default ExpenseTable;
