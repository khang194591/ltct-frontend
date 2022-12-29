import React, {} from "react";

function HistoryUpdate () {
    return (
        <div>
            <div className="text-center text-4xl py-4 font-bold">Lịch sử cập nhật</div>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Loại
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Bắt đầu
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Kết thúc
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        >
                            1
                        </th>
                        <td className="py-4 px-6">Đơn xuất</td>
                        <td className="py-4 px-6">
                            <div className="px-4 py-2 text-red-900 font-semibold rounded-xl bg-red-200 w-fit">
                                PENDING
                            </div>
                        </td>
                        <td className="py-4 px-6">
                            <div className="px-4 py-2 text-green-800 font-semibold rounded-xl bg-green-400 w-fit">
                                ACCEPT
                            </div>
                        </td>
                    </tr>
                    <tr className="bg-white border-b">
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                        >
                            10
                        </th>
                        <td className="py-4 px-6">Sản phẩm</td>
                        <td className="py-4 px-6">
                            <div className="px-4 py-2 text-red-900 font-semibold rounded-xl bg-red-200 w-fit">
                                Tốt
                            </div>
                        </td>
                        <td className="py-4 px-6">
                            <div className="px-4 py-2 text-green-800 font-semibold rounded-xl bg-green-400 w-fit">
                                Xấu
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default HistoryUpdate;