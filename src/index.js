import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ErrorBoundary from "./pages/ErrorBoundary";
import App from "./App"



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ErrorBoundary>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </ErrorBoundary>
  </BrowserRouter>
);
