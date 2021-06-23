import React from "react";

const CheckRequest = () => (
  <>
    <h2 className="text-center">RB Community Church Check Request</h2>
    <div className="flex items-center">
      <label htmlFor="date" className="text-sm font-medium text-gray-700">
        Today's Date
      </label>
      <div className="rounded-md shadow-sm">
        <input
          type="date"
          name="date"
          id="date"
          className="focus:ring-indigo-500 focus:border-indigo-500 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
    <div className="flex items-center mt-1">
      <label
        htmlFor="checkAmount"
        className="text-sm font-medium text-gray-700"
      >
        Check Amount
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left -0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="checkAmount"
          id="checkAmount"
          className="focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded.md"
          placeholder="0.00"
        />
      </div>
    </div>
    <div className="flex items-center mt-1">
      <label
        htmlFor="checkPayableTo"
        className="text-sm font-medium text-gray-700"
      >
        Check Payable To
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type="text"
          name="checkPayableTo"
          id="checkPayableTo"
          className="focus:ring-indigo-500 focus:border-indigo-500 block pl-7 pr-12 sm:text-sm border-gray-300 rounded.md"
          placeholder="Martin Luther"
        />
      </div>
    </div>
    <div className="grid grid-cols-6 gap-6 mt-1">
      <div class="col-span-6">
        <label
          for="street_address"
          class="block text-sm font-medium text-gray-700"
        >
          Street address
        </label>
        <input
          type="text"
          name="street_address"
          id="street_address"
          autocomplete="street-address"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
        <label for="city" class="block text-sm font-medium text-gray-700">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
        <label for="state" class="block text-sm font-medium text-gray-700">
          State / Province
        </label>
        <input
          type="text"
          name="state"
          id="state"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
        <label
          for="postal_code"
          class="block text-sm font-medium text-gray-700"
        >
          ZIP / Postal
        </label>
        <input
          type="text"
          name="postal_code"
          id="postal_code"
          autocomplete="postal-code"
          class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </div>
    <div>//////////////////////</div>
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          name="mailCheckToCheckPayableAddress"
          id="mailCheckToCheckPayableAddress"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor="mailCheckToCheckPayableAddress"
          className="font-medium text-gray-700"
        >
          Mail check to above address
        </label>
      </div>
    </div>
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          name="returnCheckToRequestor"
          id="returnCheckToRequestor"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor="returnCheckToRequestor"
          className="font-medium text-gray-700"
        >
          Return check to requestor
        </label>
      </div>
    </div>
  </>
);

export default CheckRequest;
