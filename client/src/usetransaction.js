import { useContext } from "react";
import { ExpenseTracker } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTracker);
  console.log("inside hooks", transactions, title);
  const transactionOfType = transactions.filter((t) => t.type === title);
  const total = transactionOfType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;
  console.log({ transactionOfType, total, categories });

  transactionOfType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) {
      category.amount += t.amount;
    }
  });

  // console.log("after foreach", category);
  const filteredCategories = categories.filter((c) => c.amount > 0);
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };
  return { total, chartData };
};

export default useTransactions;
