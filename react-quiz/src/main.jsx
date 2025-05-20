import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BankAccount from "./components/BankAccount/BankAccount.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <BankAccount /> */}
  </StrictMode>
);
