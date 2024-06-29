import IncomeForm from "./IncomeForm";
// import Paycheck from "./Paycheck";

import { useEffect, useState } from "react";

export function Income() {
  const [addIncome, setAddIncome] = useState(false);
  const [paychecks, setPaychecks] = useState([]);

  const handleIncomeForm = data => {
    console.log(data);
    // const newData = {...data, data.amount: }
    setPaychecks(paychecks.concat(data));
    setAddIncome(false);
  };

  useEffect(() => {
    const btns = document.querySelectorAll(".income-action-btns button");
    console.log("Paychecks: ", paychecks);
    // console.log(btns);
  });
  return (
    <>
      <div className="income-action-btns">
        <button
          type="button"
          onClick={() => setAddIncome(true)}
        >
          Add
        </button>
        <button type="button">Delete</button>
      </div>
      {addIncome && <IncomeForm handleIncomeForm={handleIncomeForm} />}
      <table
        id="income"
        style={{ minWidth: "450px" }}
      >
        <thead>
          <tr>
            <th
              colSpan={4}
              className="table-title"
            >
              Income
            </th>
          </tr>
          <tr>
            <th
              className="table-heading"
              colSpan={1}
            >
              Description
            </th>
            <th
              className="table-heading"
              colSpan={2}
              style={{ padding: "0px 60px" }}
            >
              Date
            </th>
            <th
              className="table-heading"
              colSpan={1}
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {paychecks.map(pay => (
            <Paycheck
              key={pay.date}
              date={pay.date}
              amount={pay.amount}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL</td>
            <td colSpan={2}>&nbsp;</td>
            <td>
              $
              {new Intl.NumberFormat().format(
                paychecks.reduce((acc, curr) => acc + parseInt(curr.amount), 0)
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

const Paycheck = ({ date, amount }) => {
  return (
    <tr>
      <td className="description">PAYCHECK</td>
      <td colSpan={2}>{new Date(date).toDateString("en-US")}</td>
      <td>$ {new Intl.NumberFormat().format(amount)}</td>
    </tr>
  );
};
