import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

<div id="root">Issue Loading Site-Index</div>;

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
