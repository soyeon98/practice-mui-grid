import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import AppTheme from "./theme";
import router from "./routes";


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppTheme>
    <RouterProvider router={router} />
  </AppTheme>
);


