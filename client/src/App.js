import "./App.css";
import Details from "./comp/details";
import { Grid, makeStyles } from "@material-ui/core";
import Main from "./comp/main";
const useStyles = makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0,255,0,,0.5)",
  },
  expense: {
    borderBottom: "10px solid rgba(255,0,0,,0.5)",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="space-evenly"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="INCOME" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="EXPENSE" />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
