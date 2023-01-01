import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "tabler-icons-react";
import { Spinner } from "../components";
import { client } from "../services/axios";

function HistoryView() {
  const { historyId } = useParams();

  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await client.get(`/history/${historyId}`);
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
          Thông tin đơn yêu cầu nhập <i>{historyId}</i>
        </h2>
        <div className="grid grid-cols-5 border border-slate-300">
          <div className="px-4 py-3 bg-slate-100 border border-slate-300 text-center">
            Mã
          </div>
          <div className="px-4 py-3 bg-slate-100 border border-slate-300 text-center">
            Mã vật phẩm
          </div>
          <div className="px-4 py-3 bg-slate-100 border border-slate-300 text-center">
            Số lượng
          </div>
          <div className="px-4 py-3 bg-slate-100 border border-slate-300 text-center">
            Trạng thái hàng
          </div>
          <div className="px-4 py-3 bg-slate-100 border border-slate-300 text-center">
            Hành động
          </div>
          {data.length !== 0 ? (
            data.map((item) => (
              <Fragment key={item.histoyItemId}>
                <div className="px-4 py-3 bg-white border border-slate-300">
                  {item.historyItemId}
                </div>
                <div className="capitalize px-4 py-3 bg-white border border-slate-300">
                  {item.itemId}
                </div>
                <div className="capitalize px-4 py-3 bg-white border border-slate-300">
                  {item.quantity}
                </div>
                <div className="capitalize px-4 py-3 bg-white border border-slate-300">
                  {item.status}
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

export default HistoryView;
