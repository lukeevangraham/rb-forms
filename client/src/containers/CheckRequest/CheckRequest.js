import React from "react";

const CheckRequest = () => (
    <>
    <h2 className="text-center">RB Community Church Check Request</h2>
    <div className="flex items-center">
        <label htmlFor="date" className="text-sm font-medium text-gray-700">Today's Date</label>
        <div className="rounded-md shadow-sm">
            <input type="date" name="date" id="date" className="focus:ring-indigo-500 focus:border-indigo-500 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" />
        </div>
    </div>
    </>
)

export default CheckRequest;