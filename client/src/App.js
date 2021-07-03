import "./App.css";
import Details from "./comp/details";
import { Grid, makeStyles } from "@material-ui/core";
import {
  PushToTalkButtonContainer,
  PushToTalkButton,
  ErrorPanel,
} from "@speechly/react-ui";
import {
  SpeechState,
  useSpeechContext,
  UseSpeechContext,
} from "@speechly/react-client";
import Main from "./comp/main";
import { useEffect, useRef } from "react";
const useStyles = makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0,255,0,,0.5)",
  },
  expense: {
    borderBottom: "10px solid rgba(255,0,0,,0.5)",
  },
}));

function App() {
  const { speechState } = useSpeechContext();
  const main = useRef(null);
  const executeScroll = () => {
    main.current.scrollIntoView();
  };

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

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
        <Grid item xs={11} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={11} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={11} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={11} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}
export default App;
