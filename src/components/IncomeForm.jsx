import { handleForm } from "../../utilities";

function IncomeForm({ handleIncomeForm }) {
  const onSubmit = e => {
    e.preventDefault();
    const form = document.querySelector(".income-form");

    handleForm(form, handleIncomeForm);
  };
  return (
    <form
      className="income-form"
      onSubmit={onSubmit}
    >
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          name="amount"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default IncomeForm;
