export const ExpenseDOM = (description, budget, actual) => {
  return { description: description, budget: budget, actual: actual };
};

export const ExpenseForm = (type, name, amount, due) => {
  return {
    type: type,
    name: name,
    budget: 0,
    amount: amount,
    due: new Date(due).toLocaleString("en-US"),
    date: new Date().toLocaleString("en-US"),
  };
};

// export const ExpenseTable = (second) => {third}

export const handleForm = (form, fn) => {
  const formObj = {};
  const formData = new FormData(form);

  for (const [key, val] of formData.entries()) {
    formObj[key] = val;
  }

  fn(formObj);
  form.reset();
  return formObj;
};
