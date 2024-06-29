import { useEffect } from "react";

const Paycheck = ({ date, amount }) => {
  console.log(amount);
  useEffect(() => {
    const amtFormatted = +amount.toLocaleString("en-US");
    console.log(amtFormatted);
  });
  return (
    <tr>
      <td className="description">PAYCHECK</td>
      <td colSpan={2}>{new Date(date).toDateString("en-US")}</td>
      <td>{amount}</td>
    </tr>
  );
};
export default Paycheck;
