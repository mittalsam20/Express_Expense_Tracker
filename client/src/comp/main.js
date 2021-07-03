import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
  makeStyles,
} from "@material-ui/core";
import Form from "./form";
import List from "./list";
import { useContext } from "react";
import { ExpenseTracker } from "../context/context";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: "20px 0",
  },
}));

const Main = () => {
  const { balance } = useContext(ExpenseTracker);
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Made By Samaksh" />
        <CardContent>
          <Typography variant="h5" align="center">
            Total Balance $${balance}
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ lineHeight: "1.5em", marginTop: "20px" }}
          >
            "Speechly Ka Content"
          </Typography>
          <Divider />
          <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />{" "}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
