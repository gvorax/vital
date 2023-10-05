import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductContextProvider } from "./context/context.jsx";
import "./i18n/i18n";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>
);
