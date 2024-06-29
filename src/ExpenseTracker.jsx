import { useState, useEffect } from "react";
import { BudgetSummary } from "./components/BudgetSummary";
import { Income } from "./components/Income";
import Calender from "./components/Calender";
import { Savings } from "./components/Savings";
import { Expenses } from "./components/Expenses";
import ExpenseTable from "./components/ExpenseTable copy";

function ExpenseTracker({ expenses, tables, budgetAmt, handleTableForm }) {
  // const [expenses, setExpenses] = useState([]);
  // const [currentExpenses, setCurrentExpenses] = useState([]);
  // const [currentType, setCurrentType] = useState("");

  const createTable = (tableType, data) => {
    console.log(tableType);
    return (
      <ExpenseTable
        title={tableType}
        expenses={data}
      />
    );
  };

  // console.log(tables);

  // useEffect(() => {
  //   const currCategory = expenses.filter(
  //     exp => exp.type.toLowerCase() === type.toLowerCase()
  //   );

  //   setCurrentExpenses(currCategory);
  //   setCurrentType(type);

  //   // createTable(type);
  //   // console.log(createTable(type));
  //   console.log(
  //     "Expenses: ",
  //     expenses,
  //     "Curr Expenses: ",
  //     currentExpenses,
  //     "Type: ",
  //     type
  //   );
  //   console.log(currCategory);
  // }, [type]);

  // console.log(budgetAmt);

  return (
    <div>
      <section id="tracker">
        {tables.map(tab => (
          <ExpenseTable
            key={tab}
            title={tab}
            expenses={expenses}
            budgetAmt={budgetAmt}
            handleTableForm={handleTableForm}
          />
        ))}
      </section>
      {/* <BudgetSummary /> */}
      {/* <Savings
        expenses={expenses}
        tables={tables}
        handleTableForm={handleTableForm}
      /> */}
      {/* <Income /> */}
      {/* <Expenses expenses={expenses} /> */}
      <hr style={{ margin: "40px 0" }} />
      <Calender />
    </div>
  );
}
export default ExpenseTracker;
