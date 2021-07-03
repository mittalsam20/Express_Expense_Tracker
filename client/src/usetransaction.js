import { useContext } from "react";
import { ExpenseTracker } from "./context/context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";


const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTracker);
    const transactionOfType = transactions.filter((t) => t.type === title)
    const total = transactionOfType.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = (title === "Income" ? incomeCategories : expenseCategories);
    console.log({ transactionOfType, total, categories });

    transactionOfType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)
        if (category) {
            category.aount += t.amount;
        }
    })
    const filteredCategories = categories.filter((c) => c.amount > 0);
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    }


    return { filteredCategories, total, chartData };
}

export default useTransactions;