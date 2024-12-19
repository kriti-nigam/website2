import React from "react";
import ReactDOM from "react-dom/client"; // Use the new ReactDOM API in React 18+
import App from "./App";
import "./index.css";

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);