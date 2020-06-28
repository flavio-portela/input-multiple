import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Global } from "@emotion/core";
import globalStyles from "./global.styles";

ReactDOM.render(
  <>
    <Global styles={globalStyles} />
    <App />
  </>,
  document.getElementById("root") as HTMLElement
);
