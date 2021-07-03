import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
ReactDOM.render(
  <SpeechProvider appId="" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
