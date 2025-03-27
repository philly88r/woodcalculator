// CustomItemsTab.jsx
import React from 'react';

const CustomItemsTab = ({ customItems, handleCustomItemChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-3">Custom Items</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Item #</th>
              <th className="border p-2 text-left">Item Name</th>
              <th className="border p-2 text-left">Description</th>
              <th className="border p-2 text-right">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {[33, 34, 35, 36, 37].map(id => (
              <tr key={id} className="border-b">
                <td className="border p-2">{id}</td>
                <td className="border p-2">
                  <input 
                    type="text" 
                    value={customItems[id].name} 
                    onChange={(e) => handleCustomItemChange(id, 'name', e.target.value)}
                    className="w-full p-1 border rounded"
                    placeholder="Custom item name"
                  />
                </td>
                <td className="border p-2">
                  <input 
                    type="text" 
                    value={customItems[id].description} 
                    onChange={(e) => handleCustomItemChange(id, 'description', e.target.value)}
                    className="w-full p-1 border rounded"
                    placeholder="Description"
                  />
                </td>
                <td className="border p-2">
                  <input 
                    type="number" 
                    value={customItems[id].quantity} 
                    onChange={(e) => handleCustomItemChange(id, 'quantity', e.target.value)}
                    className="w-full p-1 border rounded text-right"
                    min="0"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomItemsTab;