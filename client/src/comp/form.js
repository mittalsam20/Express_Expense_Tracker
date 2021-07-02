import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Typography,
  FormControl,
  FormHelperText,
  FormLabel,
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
        <Grid items xs={6}>
          <FormControl fullwidth>
            <InputLabel>Type</InputLabel>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
