import { Snackbar } from "@material-ui/core";
import MUIAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = ({ open, setOpen }) => {
  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autohide={3000}
          onClose={handleClose}
        >
          <MUIAlert
            onClose={handleClose}
            severity="success"
            elevation={6}
            variant="filled"
          >
            Transaction Successfully Created..!!
          </MUIAlert>
        </Snackbar>
      </div>
    </>
  );
};

export default Alert;
