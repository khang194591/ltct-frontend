import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { client } from "./services/axios";
import DashboardView from "./views/DashboardView";
import ExportView from "./views/ExportView";
import ImportView from "./views/ImportView";

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
        loader: async () => {
          try {
            const data = await client.get("/history/import");
            console.log(data.data);
            return data.data;
          } catch (error) {
            console.log(error);
            return "error";
          }
        },
      },
      {
        path: "/export",
        element: <ExportView />,
      },
    ],
  },
]);

export default router;
