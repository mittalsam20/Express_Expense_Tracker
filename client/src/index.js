import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <SpeechProvider appId="d34ec7da-6463-4aff-ae06-071686ec18d9" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);

serviceWorker.register();
