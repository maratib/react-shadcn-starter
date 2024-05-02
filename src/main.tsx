import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AdminRouter } from "./routes/admin-router";
import "@/assets/global.css";
import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={AdminRouter} />
  </React.StrictMode>
);
