import { createContext, useReducer } from "react";
import contextReducer from "./contextreducer";
import axios from "axios";

const getall = async () => {
  const alltrs = await axios.get("http://localhost:5000/app/gettr");
  console.log(alltrs);
  return alltrs;
};

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];
export const ExpenseTracker = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  //-------------Actions------
  const delTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, curr) => {
    return curr.type === "Expense" ? acc - curr.amount : acc + curr.amount;
  }, 0);

  return (
    <>
      <ExpenseTracker.Provider
        value={{ delTransaction, addTransaction, transactions, balance }}
      >
        {children}
      </ExpenseTracker.Provider>
    </>
  );
};
