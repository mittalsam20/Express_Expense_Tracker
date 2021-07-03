import { createContext, useReducer } from "react";
import contextReducer from "./contextreducer";
const initialState = [];
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

  return (
    <>
      <ExpenseTracker.Provider value={{ delTransaction, addTransaction }}>
        {children}
      </ExpenseTracker.Provider>
    </>
  );
};
