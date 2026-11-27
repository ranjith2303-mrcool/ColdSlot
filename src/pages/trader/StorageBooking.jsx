function StorageBooking() {
    return ( 
         <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Storage Booking Layout</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="goodsname" className="mb-1 block text-sm font-medium text-gray-700">Goods name...</label>
                    <input id="goodsName" name="goodsName" type="text" placeholder="Enter a goods name" className="w-full rounded-md border border-gray-300 p-2"/>
                </div>
                <div>
                    <label htmlFor="quantity" className="mb-1 block text-sm font-medium text-gray-700">Quantity(kg)...</label>
                    <input id="quantity" name="quantity" type="number" min="1" placeholder="Enter a quantity" className="w-full rounded-md border border-gray-300 p-2"/>
                </div>
                <div>
                    <label htmlFor="temperatureZone" className="mb-1 block text-sm font-medium text-gray-700">
                        Required Storage Zone
                    </label>
                    <select id="temperatureZone" name="temperatureZone" className="w-full rounded-md border border-gray-300 p-2">
                        <option value="">Select a zone</option>
                        <option value="chilled">Chilled</option>
                        <option value="frozen">Frozen</option>
                        <option value="deep-freeze">Deep Freeze</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="storageDuration" className="mb-1 block text-sm font-medium text-gray-700">Storage Duration(days)
                    </label>
                    <input id="storageDuration" name="storageDuration" type="number" min="1" placeholder="Enter number of days" className="w-full rounded-md border border-gray-300 p-2"/>
                </div>
                <button type="submit" className="rounded-md bg-blue-900 px-4 py-2 text-white hover:bg-blue-800">Submit</button>
            </form>
           </div>
     );
}
export default StorageBooking;