import React, {} from "react";

export const DetailBillView = () => {
    var listDetail;
    return (
        <div>
            <div className="text-center text-4xl py-4 font-bold">Chi tiết đơn hàng <span>ID: 5</span></div>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                    <th scope="col" className="py-3 px-6">
                        Id_item
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Ngày lập đơn
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Số lượng
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Chất lượng
                    </th>
                    <th scope="col" className="py-3 px-6">
                        Tình trạng đóng gói
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
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">
                        <div className="px-4 py-2 text-blue-800 rounded-xl bg-yellow-300 w-fit">
                        PENDING
                        </div>
                    </td>
                    <td className="py-4 px-6">
                        <div className="px-4 py-2 text-green-800 font-semibold rounded-xl bg-green-400 w-fit">
                        DONE
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
}