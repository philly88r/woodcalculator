// PricingTab.jsx
import React from 'react';
import { calculateCommission } from '../calculatorUtils';

const PricingTab = ({ projectPricing, handleProjectPricingChange, costs, taxRate, setTaxRate }) => {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6">
      <div className="border p-4 rounded-lg">
        <h3 className="font-medium text-lg mb-3">Project Pricing</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Minimum Price ($)</label>
            <input 
              type="number" 
              value={projectPricing.minimumPrice} 
              onChange={(e) => handleProjectPricingChange('minimumPrice', e.target.value)}
              className="p-2 border rounded"
              min="0"
              step="0.01"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Maximum Price ($)</label>
            <input 
              type="number" 
              value={projectPricing.maximumPrice} 
              onChange={(e) => handleProjectPricingChange('maximumPrice', e.target.value)}
              className="p-2 border rounded"
              min="0"
              step="0.01"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Quoted Selling Price ($)</label>
            <input 
              type="number" 
              value={projectPricing.quotedPrice} 
              onChange={(e) => handleProjectPricingChange('quotedPrice', e.target.value)}
              className="p-2 border rounded"
              min="0"
              step="0.01"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Estimated Commission ($)</label>
            <div className="p-2 border rounded bg-gray-50">
              {calculateCommission(projectPricing.quotedPrice).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="border p-4 rounded-lg">
        <h3 className="font-medium text-lg mb-3">Material Costs</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Total Material Cost ($)</label>
            <div className="p-2 border rounded bg-gray-50">
              {costs.totalCost?.toFixed(2) || "0.00"}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Tax Rate (%)</label>
            <input 
              type="number" 
              value={taxRate} 
              onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
              className="p-2 border rounded"
              min="0"
              max="20"
              step="0.01"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Tax Amount ($)</label>
            <div className="p-2 border rounded bg-gray-50">
              {((costs.totalCost || 0) * (taxRate / 100)).toFixed(2)}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Grand Total with Tax ($)</label>
            <div className="p-2 border rounded bg-gray-50 font-medium">
              {((costs.totalCost || 0) * (1 + taxRate / 100)).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="border p-4 rounded-lg">
        <h3 className="font-medium text-lg mb-3">Pricing Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Profit Margin ($)</label>
            <div className="p-2 border rounded bg-gray-50">
              {(projectPricing.quotedPrice - ((costs.totalCost || 0) * (1 + taxRate / 100))).toFixed(2)}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-medium">Profit Margin (%)</label>
            <div className="p-2 border rounded bg-gray-50">
              {costs.totalCost ? 
                (((projectPricing.quotedPrice - ((costs.totalCost) * (1 + taxRate / 100))) / projectPricing.quotedPrice) * 100).toFixed(2) 
                : "0.00"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTab;