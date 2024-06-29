export function Debt() {
  return (
    <>
      <table id="debt">
        <thead>
          <tr>
            <th colSpan="3">Debt</th>
          </tr>
          <tr>
            <th className="budget-heading">Description</th>
            <th className="budget-heading">Budget</th>
            <th className="budget-heading">Actual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="description">Line of Credit</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className="description">Credit Card</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className="description">Emergencies</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className="description">Car</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
