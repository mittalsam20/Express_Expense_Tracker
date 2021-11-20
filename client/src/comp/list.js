import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";
import { Delete, MoneyOff } from "@material-ui/icons";
import axios from "axios";
import { useContext } from "react";
import { ExpenseTracker } from "../context/context";

const useStyles = makeStyles((theme) => ({
  avatarIncome: {
    color: "#fff",
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: "100px",
    overflow: "auto",
  },
}));

const List = () => {
  const classes = useStyles();
  const { delTransaction, transactions } = useContext(ExpenseTracker);

  return (
    <>
      <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
          <Slide
            direction="up"
            in
            mountOnEnter
            unmountOnExit
            key={transaction.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  className={
                    transaction.type === "income"
                      ? classes.avatarIncome
                      : classes.avatarExpense
                  }
                >
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.category}
                secondary={`$ ${transaction.amount} - ${transaction.date}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={(e) => {
                    e.preventDefault();
                    delTransaction(transaction.id);
                    axios
                      .delete(
                        `http://localhost:5000/app/deltr/6198b0545719d71cb07e43bc`
                      )
                      // .delete(`app/deltr/${props.Key}`)
                      .then(async (res) => {
                        console.log("Transaction Deleted..!!");
                        // console.log(JSON.stringify(res.data));
                        // const resonse = await axios.get("/app/notes");
                        // const notesdata = resonse.data;
                        // const curRecNotes = notesdata.filter(
                        //   (ele) => ele.rec === curRec
                        // );
                        // props.setRecNotes(curRecNotes);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      </MUIList>
    </>
  );
};

export default List;
