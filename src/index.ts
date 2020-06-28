import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Global } from "@emotion/core";
import globalStyles from "./global.styles";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
