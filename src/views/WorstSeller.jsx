import React, {} from "react";

export const WorstSeller = () => {
    return (
        <div>
            <div className="text-center text-4xl py-4 font-bold">Hàng bán ế</div>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Id_item
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Số lượng
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Có số đơn
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Dư kho
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
                        <td className="py-4 px-6">20</td>
                        <td className="py-4 px-6">4</td>
                        <td className="py-4 px-6">
                            <div className="px-4 py-2 text-red-900 font-semibold rounded-xl bg-red-200 w-fit">
                                12
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
}