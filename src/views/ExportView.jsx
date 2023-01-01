import dayjs from "dayjs";
import "dayjs/locale/vi";
import calendar from "dayjs/plugin/calendar";
import React, { useEffect, useState } from "react";
import { Spinner } from "../components";
import { client } from "../services/axios";

dayjs.locale("vi");
dayjs.extend(calendar);

function ExportView() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await client.get("/history/export");
      console.log(data.data);
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return loading ? (
    <div className="flex h-full justify-center items-center">
      <Spinner />
    </div>
  ) : error ? (
    <div className="flex h-full justify-center items-center">
      <p className="text-4xl">😢 Có lỗi xảy ra khi lấy dữ liệu</p>
    </div>
  ) : (
    <div className="p-8">
      <div className="bg-white flex flex-col rounded-lg p-4">
        <h2 className="text-center font-medium mb-4">
          Danh sách các đơn nhập đã thực hiện
        </h2>
        <div className="grid grid-cols-3 bg-black gap-[1px] border-black border-[1px]">
          <div className="px-4 py-3 bg-green-400">Mã yêu cầu</div>
          <div className="px-4 py-3 bg-green-400">Thời gian duyệt</div>
          <div className="px-4 py-3 bg-green-400">Hành động</div>
          {data.map((item) => (
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

export default ExportView;
