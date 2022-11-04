import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./pages/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense
        fallback={
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
            }}
          >
            Loading....
          </p>
        }
      >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
