import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import app from "../src/assets/FirebaseConfigaration/FirebaseConfig.js";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
