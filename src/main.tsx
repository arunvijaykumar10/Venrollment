import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes/AppRoutes"; // Import the routes

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/TNVRKSJEN/venrollment">
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
