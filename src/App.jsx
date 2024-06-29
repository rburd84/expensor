import { useState, useEffect } from "react";
import "./App.css";
import ExpensForm from "./components/Form";
import TableForm from "./components/TableForm";
import ExpenseTracker from "./ExpenseTracker";
import { ExpenseDOM, ExpenseForm } from "../utilities";
import { data } from "../data";
import BudgetForm from "./components/BudgetForm";

function App() {
  const [expenses, setExpenses] = useState(data);
  const [expenseType, setExpenseType] = useState("");
  const [tables, setTables] = useState([]);
  const [budgetAmt, setBudgetAmt] = useState(0);

  const handleExpenseForm = data => {
    console.log(data);
    const { type, name, amount, due } = data;
    const formInput = ExpenseForm(type, name, amount, due);
    addToState(formInput);
    return formInput;
  };

  const addToState = expense => {
    setExpenses(expenses.concat(expense));
    console.log(expenses);

    return expenses;
  };

  const handleTableForm = data => {
    handleExpenseType(data);

    console.log(data);
    if (tables.includes(data.type)) {
      return;
    } else {
      setTables(tables.concat(data.type));
    }
  };

  const handleExpenseType = data => {
    console.log(data);
    setExpenseType(data.type);
  };

  const handleBudgetForm = data => {
    const budgetAmt = +data.budget;
    setBudgetAmt(budgetAmt);

    // console.log(typeof budgetAmt);
    console.log(budgetAmt.toLocaleString("en-US"));
    return budgetAmt.toLocaleString("en-US");
  };

  useEffect(() => {
    const titles = [...new Set(expenses.map(exp => exp.type))];
    setTables(titles);
  }, []);

  return (
    <>
      <div className="container">
        <nav></nav>
        <section>
          <h2>Expensor</h2>
        </section>

        <section className="form-section">
          {/* <TableForm handleTableForm={handleTableForm} /> */}
          {/* <ExpensForm handleExpenseForm={handleExpenseForm} /> */}
          <BudgetForm handleBudgetForm={handleBudgetForm} />
        </section>

        <section>
          <div className="expense-data">
            {/* <p>{expense.name}</p>
            <p>${expense.amount}</p>
            <p>{expense.type}</p>
            <p>{expense.date}</p>
            <p>{expense.due}</p> */}
          </div>
        </section>
        <section>
          <ExpenseTracker
            expenses={expenses}
            type={expenseType}
            tables={tables}
            budgetAmt={budgetAmt}
            handleTableForm={handleTableForm}
            handleExpenseForm={handleExpenseForm}
          />
          {/* <ExpenseTracker /> */}
        </section>
      </div>
    </>
  );
}

export default App;
