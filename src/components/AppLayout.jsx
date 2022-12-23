import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  BuildingWarehouse,
  Dashboard,
  PackgeExport,
  PackgeImport,
  User,
} from "tabler-icons-react";

function AppLayout() {
  const { pathname } = useLocation();
  const items = [
    {
      key: "/",
      icon: <Dashboard />,
      label: "Trang chủ",
    },
    {
      key: "/import",
      icon: <PackgeImport />,
      label: "Nhập kho",
    },
    {
      key: "/export",
      icon: <PackgeExport />,
      label: "Xuất kho",
    },
  ];
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="h-full bg-slate-800 min-w-[240px] px-4">
        <Link
          to="/"
          className="text-green-500 flex gap-1 flex-row items-center m-4 cursor-pointer select-none"
        >
          <BuildingWarehouse className="h-8 w-8 flex items-center justify-center" />
          <p className="text-2xl flex-1 text-center font-semibold">Warehouse</p>
        </Link>
        <div>
          {items.map((item) => (
            <Link
              to={item.key}
              key={item.key}
              className={`flex flex-row px-4 py-3 gap-2 uppercase  hover:text-white rounded-lg ${
                pathname === item.key
                  ? "text-white bg-green-500"
                  : "text-slate-400"
              }`}
            >
              {item.icon}
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 min-h-full flex flex-col">
        <div className="flex flex-row items-center h-16 px-4 bg-slate-800">
          <span className="flex-1" />
          <span className="bg-green-500 rounded-full h-10 w-10 flex items-center justify-center">
            <User />
          </span>
        </div>
        <div className={"bg-slate-100 flex-1"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;