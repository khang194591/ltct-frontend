import React from "react";
import { useLoaderData } from "react-router-dom";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import "dayjs/locale/vi";

dayjs.locale("vi");
dayjs.extend(calendar);

function ImportView() {
  const defaultData = useLoaderData();

  return (
    <div className="p-8">
      <div className="bg-white flex flex-col rounded-lg p-4">
        <h2 className="text-center font-medium mb-4">
          Danh sách các đơn nhập đã thực hiện
        </h2>
        <div className="grid grid-cols-3 bg-black gap-[1px] border-black border-[1px]">
          <div className="px-4 py-3 bg-green-400">Mã yêu cầu</div>
          <div className="px-4 py-3 bg-green-400">Thời gian duyệt</div>
          <div className="px-4 py-3 bg-green-400">Hành động</div>
          {defaultData.map((item) => (
            <>
              <div key={item.historyId} className="px-4 py-3 bg-white">
                {item.historyId}
              </div>
              <div
                key={`${item.historyId}.${item.createdAt}`}
                className="capitalize px-4 py-3 bg-white"
              >
                {dayjs().calendar(dayjs(item.createdAt))}
              </div>
              <div
                key={`${item.historyId}.action`}
                className="px-4 py-3 bg-white"
              >
                Xem
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImportView;
