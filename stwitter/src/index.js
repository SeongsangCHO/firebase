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
    </MetaTags>
  </React.StrictMode>,
  document.getElementById("root")
);
