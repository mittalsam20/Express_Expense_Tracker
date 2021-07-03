import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../usetransaction";
const useStyles = makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0,255,0,0.5)",
    borderTop: "10px solid rgba(0,255,0,0.5)",
  },
  expense: {
    borderBottom: "10px solid rgba(255,0,0,0.5)",
    borderTop: "10px solid rgba(255,0,0,0.5)",
  },
}));

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <>
      <Card className={title === "INCOME" ? classes.income : classes.expense}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </>
  );
};

export default Details;
