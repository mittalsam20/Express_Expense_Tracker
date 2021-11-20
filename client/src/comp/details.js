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
    marginTop: "30px",
    borderBottom: "10px solid rgba(0,255,0,0.8)",
    borderTop: "10px solid rgba(0,255,0,0.8)",
    maxHeight: "500px",
  },
  expense: {
    marginTop: "30px",
    borderBottom: "10px solid rgba(255,0,0,0.8)",
    borderTop: "10px solid rgba(255,0,0,0.8)",
    maxHeight: "500px",
  },
}));

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <>
      <Card className={title === "Income" ? classes.income : classes.expense}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">${total}</Typography>
          <div style={{ maxWidth: "90%" }}>
            <Doughnut data={chartData} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Details;
