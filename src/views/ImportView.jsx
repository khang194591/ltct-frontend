import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "tabler-icons-react";
import { Spinner } from "../components";
import { client } from "../services/axios";

dayjs.extend(calendar);

dayjs().calendar(null, {
  sameDay: "[Hôm nay lúc] H:mm", // The same day ( Today at 2:30 AM )
  nextDay: "[Ngày mai lúc] h:mm A", // The next day ( Tomorrow at 2:30 AM )
  nextWeek: "dddd [lúc] h:mm A", // The next week ( Sunday at 2:30 AM )
  lastDay: "[Hôm qua lúc] h:mm A", // The day before ( Yesterday at 2:30 AM )
  lastWeek: "dddd [tuần trước] [lúc] h:mm A", // Last week ( Last Monday at 2:30 AM )
  sameElse: "DD/MM/YYYY", // Everything else ( 17/10/2011 )
});

function ImportView() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await client.get("/history/import");
      console.log(data.data);
      setData(data.data);
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
        <div className="grid grid-cols-4 border border-slate-300">
          <div className="px-4 py-3 bg-slate-100 border border-slate-300 text-center">
            Mã yêu cầu
          </div>
          <div className="px-4 py-3 bg-slate-100 border border-slate-300 text-center">
            Thời gian tạo
          </div>
          <div className="px-4 py-3 bg-slate-100 border border-slate-300 text-center">
            Thời gian duyệt
          </div>
          <div className="px-4 py-3 bg-slate-100 border border-slate-300 text-center">
            Hành động
          </div>
          {data.length !== 0 ? (
            data.map((item) => (
              <Fragment key={item.historyId}>
                <div className="px-4 py-3 bg-white border border-slate-300">
                  {item.historyId}
                </div>
                <div className="px-4 py-3 bg-white border border-slate-300">
                  {dayjs(dayjs(item.createdAt)).calendar(null, {
                    sameDay: "[Hôm nay lúc] H:mm", // The same day ( Today at 2:30 AM )
                    nextDay: "[Ngày mai lúc] h:mm A", // The next day ( Tomorrow at 2:30 AM )
                    nextWeek: "dddd [lúc] h:mm A", // The next week ( Sunday at 2:30 AM )
                    lastDay: "[Hôm qua lúc] h:mm A", // The day before ( Yesterday at 2:30 AM )
                    lastWeek: "dddd [tuần trước] [lúc] h:mm A", // Last week ( Last Monday at 2:30 AM )
                    sameElse: "DD/MM/YYYY", // Everything else ( 17/10/2011 )
                  })}
                </div>
                <div className="px-4 py-3 bg-white border border-slate-300">
                  {dayjs(dayjs(item.updatedAt)).calendar(null, {
                    sameDay: "[Hôm nay lúc] H:mm", // The same day ( Today at 2:30 AM )
                    nextDay: "[Ngày mai lúc] h:mm A", // The next day ( Tomorrow at 2:30 AM )
                    nextWeek: "dddd [lúc] h:mm A", // The next week ( Sunday at 2:30 AM )
                    lastDay: "[Hôm qua lúc] h:mm A", // The day before ( Yesterday at 2:30 AM )
                    lastWeek: "dddd [tuần trước] [lúc] h:mm A", // Last week ( Last Monday at 2:30 AM )
                    sameElse: "DD/MM/YYYY", // Everything else ( 17/10/2011 )
                  })}
                </div>
                <div className="px-4 py-3 bg-white border border-slate-300 flex justify-center items-center">
                  <Link
                    to={`/history/${item.historyId}`}
                    className="font-medium hover:underline"
                  >
                    Xem
                  </Link>
                </div>
              </Fragment>
            ))
          ) : (
            <span className="col-span-full flex flex-col justify-center items-center text-slate-300 p-4 border border-slate-300">
              <Box className="my-4" size={96} strokeWidth={1} />
              <p className="text-2xl text-slate-400">Trống</p>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImportView;
