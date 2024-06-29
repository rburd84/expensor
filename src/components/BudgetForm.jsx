// import { useState } from "react";
import { handleForm } from "../../utilities";

function BudgetForm({ handleBudgetForm }) {
  const onSubmit = e => {
    e.preventDefault();
    const form = document.querySelector(".budget-form");

    handleForm(form, handleBudgetForm);
  };

  return (
    <>
      <form
        className="budget-form"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="budget"
          id="budget"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default BudgetForm;
