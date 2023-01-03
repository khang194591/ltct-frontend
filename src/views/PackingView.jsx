import dayjs from "dayjs";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "tabler-icons-react";
import { Spinner } from "../components";
import { client } from "../services/axios";

function PackingView() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [error, setError] = useState();
  const [packingStatus, setPackingStatus] = useState("PENDING");
  const [loading, setLoading] = useState(true);

  const handleOK = async (historyId) => {
    setLoading(true);
    try {
      console.log(`/export/${historyId}`);
      const response = await client.post(`/export/${historyId}`);
      const arr = data.filter((item) => {
        return item.historyId !== historyId;
      });
      console.log(response.data);
      setData(arr);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await client.get(
        `/export?packingStatus=${packingStatus}&offset=${(page - 1) * 10}`
      );
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
  }, [page, packingStatus]);

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
      <div>
        <label htmlFor="">Trạng thái đóng gói: </label>
        <select
          className="bg-slate-300"
          name="packingStatus"
          id=""
          value={packingStatus}
          onChange={(e) => setPackingStatus(e.currentTarget.value)}
        >
          <option value="PENDING">Chờ đóng gói</option>
          <option value="DONE">Đã đóng gói</option>
        </select>
      </div>
      <div className="bg-white flex flex-col rounded-lg p-4 gap-16">
        <div className="flex flex-col mb-10">
          <h2 className="text-center font-medium text-lg mb-4">
            Danh sách các đơn đang đóng gói
          </h2>
          <div className="grid grid-cols-5 border border-slate-300">
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
              Trạng thái
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
                    {dayjs(item.createdAt).format("H:mm [ngày] DD/MM/YYYY")}
                  </div>
                  <div className="px-4 py-3 bg-white border border-slate-300">
                    {dayjs(item.updatedAt).format("H:mm [ngày] DD/MM/YYYY")}
                  </div>
                  <div
                    className={
                      "px-4 py-3 bg-white border border-slate-300 text-center "
                    }
                  >
                    <p
                      className={`w-fit mx-auto p-1 rounded-lg
                      ${
                        item.packingStatus === "PENDING"
                          ? "bg-yellow-300"
                          : "bg-green-300"
                      }
                      `}
                    >
                      {item.packingStatus}
                    </p>
                  </div>
                  <div className="px-4 py-3 bg-white border border-slate-300 flex justify-center gap-4 items-center">
                    <Link
                      to={`/history/${item.historyId}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Xem
                    </Link>
                    {packingStatus === "PENDING" && (
                      <button
                        onClick={() => handleOK(item.historyId)}
                        className="font-medium text-green-600 hover:underline"
                      >
                        Phê duyệt xong
                      </button>
                    )}
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
          <div className="mt-4 flex justify-end">
            <button
              className="px-4 py-3 bg-slate-600 text-white"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Trước
            </button>
            <input
              className="px-4 py-3 bg-slate-300 text-slate-600 border-none focus:outline-none"
              value={page}
              disabled
              type="number"
            />
            <button
              className="px-4 py-3 bg-slate-600 text-white"
              onClick={() => setPage(page + 1)}
              disabled={data.length === 0}
            >
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackingView;
