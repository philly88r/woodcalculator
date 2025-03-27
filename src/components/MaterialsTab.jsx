// MaterialsTab.jsx
import React from 'react';
import { materialItems } from '../calculatorData';

const MaterialsTab = ({ quantities, handleQuantityChange, costs }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-3">Materials List</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Item #</th>
              <th className="border p-2 text-left">Item</th>
              <th className="border p-2 text-left">Description</th>
              <th className="border p-2 text-right">Quantity</th>
              <th className="border p-2 text-right">Unit Cost ($)</th>
              <th className="border p-2 text-right">Total ($)</th>
            </tr>
          </thead>
          <tbody>
            {materialItems.map(item => {
              // Skip custom items - they are handled separately
              if (item.id >= 33 && item.id <= 37) return null;
              
              return (
                <tr key={item.id} className="border-b">
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.description}</td>
                  <td className="border p-2">
                    <input 
                      type="number" 
                      value={quantities[item.id] || 0} 
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="w-20 p-1 border rounded text-right"
                      min="0"
                    />
                  </td>
                  <td className="border p-2 text-right">{item.unitCost.toFixed(2)}</td>
                  <td className="border p-2 text-right">{(costs.itemCosts?.[item.id] || 0).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td colSpan="5" className="border p-2 text-right font-medium">Total</td>
              <td className="border p-2 text-right font-medium">{(costs.totalCost || 0).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MaterialsTab;