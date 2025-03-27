// ResultView.jsx
import React from 'react';
import { materialItems } from '../calculatorData';

const ResultView = ({ customerInfo, specs, quantities, costs, taxRate, projectPricing, customItems }) => {
  // Calculate grand total with tax
  const grandTotal = (costs.totalCost || 0) * (1 + (taxRate / 100));

  return (
    <div className="print-only">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-center">Pull List</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-medium mb-2">Customer Information</h3>
            <div className="grid grid-cols-1 gap-1">
              <p><strong>Name:</strong> {customerInfo.name}</p>
              <p><strong>Site Address:</strong> {customerInfo.address}</p>
              <p><strong>Phone:</strong> {customerInfo.phone}</p>
              <p><strong>Invoice #:</strong> {customerInfo.invoiceNumber}</p>
              <p><strong>Sales Rep:</strong> {customerInfo.salesRep}</p>
              {customerInfo.crewLead && <p><strong>Crew Lead:</strong> {customerInfo.crewLead}</p>}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Job Description</h3>
            <div className="grid grid-cols-1 gap-1">
              <p><strong>Fence Type:</strong> {specs.fenceType}</p>
              <p><strong>Fence Style:</strong> {specs.picketOrientation === 'Vertical' ? 'Privacy' : 'Horizontal'}</p>
              <p><strong>Total Linear Length:</strong> {specs.length} feet</p>
              <p><strong>Height:</strong> {specs.fenceHeight} feet</p>
              <p><strong>Type of Post:</strong> {specs.postType}</p>
              <p><strong>Single Gates:</strong> {specs.singleGates}</p>
              <p><strong>Double Gates:</strong> {specs.doubleGates}</p>
              <p><strong>Sliding Gates:</strong> {specs.slidingGates}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Material List</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Item #</th>
                  <th className="border p-2 text-left">Item</th>
                  <th className="border p-2 text-left">Description</th>
                  <th className="border p-2 text-right">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {materialItems.map(item => {
                  // Skip items with zero quantity and custom items (handled separately)
                  if ((quantities[item.id] || 0) === 0 || (item.id >= 33 && item.id <= 37)) return null;
                  
                  return (
                    <tr key={item.id} className="border-b">
                      <td className="border p-2">{item.id}</td>
                      <td className="border p-2">{item.name}</td>
                      <td className="border p-2">{item.description}</td>
                      <td className="border p-2 text-right">{quantities[item.id] || 0}</td>
                    </tr>
                  );
                })}
                
                {/* Custom items */}
                {Object.entries(customItems).map(([id, item]) => {
                  if (!item.name && !item.description && !item.quantity) return null;
                  
                  return (
                    <tr key={id} className="border-b">
                      <td className="border p-2">{id}</td>
                      <td className="border p-2">{item.name}</td>
                      <td className="border p-2">{item.description}</td>
                      <td className="border p-2 text-right">{item.quantity || 0}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="mb-6 print-break-avoid">
        <h3 className="font-medium mb-2">Price Calculation (For Office Use Only)</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Description</th>
                <th className="border p-2 text-right">Amount ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="border p-2">Total Material Cost</td>
                <td className="border p-2 text-right">{costs.totalCost?.toFixed(2) || "0.00"}</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">Tax ({taxRate}%)</td>
                <td className="border p-2 text-right">{((costs.totalCost || 0) * (taxRate / 100)).toFixed(2)}</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2 font-medium">Grand Total with Tax</td>
                <td className="border p-2 text-right font-medium">{grandTotal.toFixed(2)}</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">Minimum Selling Price</td>
                <td className="border p-2 text-right">{projectPricing.minimumPrice.toFixed(2)}</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">Maximum Selling Price</td>
                <td className="border p-2 text-right">{projectPricing.maximumPrice.toFixed(2)}</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2 font-medium">Quoted Selling Price</td>
                <td className="border p-2 text-right font-medium">{projectPricing.quotedPrice.toFixed(2)}</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">Profit Margin</td>
                <td className="border p-2 text-right">{(projectPricing.quotedPrice - grandTotal).toFixed(2)}</td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">Profit Margin (%)</td>
                <td className="border p-2 text-right">
                  {(((projectPricing.quotedPrice - grandTotal) / projectPricing.quotedPrice) * 100).toFixed(2)}%
                </td>
              </tr>
              <tr className="border-b">
                <td className="border p-2">Sales Commission</td>
                <td className="border p-2 text-right">{(projectPricing.quotedPrice * 0.07).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 mt-6 text-center">
        <p>This is an estimate. Actual materials needed may vary based on specific installation requirements.</p>
      </div>
    </div>
  );
};

export default ResultView;