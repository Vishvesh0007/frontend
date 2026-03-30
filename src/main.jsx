import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Environment Variable Guard
if (!import.meta.env.VITE_API_BASE_URL) {
  console.error(
    "🔥 CRITICAL ERROR: VITE_API_BASE_URL is not defined in your environment variables. " +
    "The application will fail to communicate with the backend. " +
    "Please add VITE_API_BASE_URL to Vercel Settings or your Local .env file."
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);