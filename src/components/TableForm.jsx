// import { useState } from "react";
import { handleForm } from "../../utilities";

function TableForm({ handleTableForm }) {
  const onSubmit = e => {
    e.preventDefault();
    const form = document.querySelector(".table-form");
    console.log(form);
    handleForm(form, handleTableForm);
  };

  return (
    <>
      <form
        className="table-form"
        onSubmit={onSubmit}
      >
        <div>
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
          >
            <option defaultValue="sel">Select table type</option>
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default TableForm;
