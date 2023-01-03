import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import DashboardView from "./views/DashboardView";
import ExportView from "./views/ExportView";
import HistoryView from "./views/HistoryView";
import ImportView from "./views/ImportView";
import PackingView from "./views/PackingView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <DashboardView />,
      },
      {
        path: "/import",
        element: <ImportView />,
      },
      {
        path: "/history/:historyId",
        element: <HistoryView />,
      },
      {
        path: "/export",
        element: <ExportView />,
      },
      {
        path: "/packing",
        element: <PackingView />,
      },
    ],
  },
]);

export default router;
