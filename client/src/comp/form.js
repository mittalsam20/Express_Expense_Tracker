import { makeStyles } from "@material-ui/core";
import {
  Button,
  Grid,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useState, useContext } from "react";
import { ExpenseTracker } from "../context/context";
import { v4 as uuidv4 } from "uuid";
const useStyles = makeStyles(() => {});

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date(),
};
const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTracker);
  return (
    <>
      <Grid container spacing={2}>
        <Grid items xs={12}>
          <Typography variant="subtitle2" align="center" gutterBottom>
            {/* words that are spea */}
          </Typography>
        </Grid>
        <br />
        <Grid items xs={6}>
          <FormControl fullWidth style={{ paddingTop: "8px" }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) => {
                setFormData({ ...formData, type: e.target.value });
              }}
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(e) => {
                setFormData({ ...formData, category: e.target.value });
              }}
            >
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            label="Amount"
            fullWidth
            value={formData.amount}
            onChange={(e) => {
              setFormData({ ...formData, amount: e.target.value });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="Date"
            placeholder=""
            fullWidth
            value={formData.date}
            onChange={(e) => {
              setFormData({ ...formData, date: e.target.value });
            }}
          />
        </Grid>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
          onClick={() => {
            const transaction = {
              ...formData,
              amount: Number(formData.amount),
              id: uuidv4(),
            };
            addTransaction(transaction);
            console.log(transaction);
            setFormData(initialState);
          }}
        >
          Create
        </Button>
      </Grid>
    </>
  );
};

export default Form;
