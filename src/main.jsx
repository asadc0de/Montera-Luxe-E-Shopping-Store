import "./index.css"; // Global styles imported here
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Context from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);
