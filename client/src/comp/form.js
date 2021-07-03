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
const useStyles = makeStyles(() => {});

const Form = () => {
  const classes = useStyles();
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
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select>
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField type="number" label="Amount" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField type="date" label="Date" placeholder="" fullWidth />
        </Grid>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
        >
          Create
        </Button>
      </Grid>
    </>
  );
};

export default Form;
