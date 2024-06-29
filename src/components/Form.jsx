// import { useState } from "react";
import { handleForm } from "../../utilities";

function ExpenseForm({ handleExpenseForm }) {
  const onSubmit = e => {
    e.preventDefault();
    const form = document.querySelector(".expense-form");

    console.log(form, handleExpenseForm);
    // handleForm(form, handleExpenseForm);
  };

  return (
    <>
      <form
        className="expense-form"
        onSubmit={onSubmit}
      >
        <div>
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            // onChange={handleSelect}
          >
            <option defaultValue="sel">Select expense type</option>
            <option value="Car">Car</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Fuel">Fuel</option>
            <option value="Groceries">Groceries</option>
            <option value="Health">Health</option>
            <option value="Home">Home</option>
            <option value="Misc">Misc</option>
            <option value="Shopping">Shopping</option>
            <option value="Taxes">Taxes</option>
            <option value="Transportation">Transportation</option>
            <option value="Travel">Travel</option>
            <option value="Utilities">Utilities</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter company name"
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
        <div>
          <label htmlFor="due">Due Date</label>
          <input
            type="datetime-local"
            name="due"
            id="due"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default ExpenseForm;
