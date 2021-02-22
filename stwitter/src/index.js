import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import "index.module.css";
import MetaTags from "react-meta-tags";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MetaTags>
      <title>Switter</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta charset="UTF-8" />
    </MetaTags>
  </React.StrictMode>,
  document.getElementById("root")
);
