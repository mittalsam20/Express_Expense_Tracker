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

import { Delete, MoneyOff } from "@material-ui/icons";
import { useContext } from "react";
import { ExpenseTracker } from "../context/context";

const useStyles = makeStyles(() => {});

const List = () => {
  const classes = useStyles();
  const { delTransaction, transactions } = useContext(ExpenseTracker);

  return (
    <>
      <MUIList dense={false} className={classes.list}></MUIList>
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
                onClick={() => {
                  delTransaction(transaction.id);
                }}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </>
  );
};

export default List;
