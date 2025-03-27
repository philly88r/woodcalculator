// GatesTab.jsx
import React from 'react';

const GatesTab = ({ specs, handleSpecsChange, handleGateCountChange, handleGateWidthChange }) => {
  return (
    <div className="grid grid-cols-1 gap-6 mb-6">
      {/* Single Gates */}
      <div className="border p-4 rounded-lg">
        <h3 className="font-medium text-lg mb-3">Single Gates</h3>
        <div className="flex items-center gap-4 mb-4">
          <label className="font-medium">Number of Single Gates:</label>
          <input 
            type="number" 
            name="singleGates" 
            value={specs.singleGates} 
            onChange={handleGateCountChange}
            className="p-2 border rounded w-20"
            min="0"
          />
        </div>
        
        {specs.singleGates > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="flex flex-col gap-2">
                <label className="font-medium">Metal Frame Gate?</label>
                <select 
                  name="metalFrameGate" 
                  value={specs.metalFrameGate} 
                  onChange={handleSpecsChange}
                  className="p-2 border rounded"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Gate Widths (inches)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: parseInt(specs.singleGates) }).map((_, index) => (
                  <div key={`single-gate-${index}`} className="flex flex-col gap-2">
                    <label className="text-sm">Gate {index + 1} Width</label>
                    <input
                      type="number"
                      value={specs.singleGateWidths[index] || 60}
                      onChange={(e) => handleGateWidthChange('single', index, e.target.value)}
                      className="p-2 border rounded"
                      min="24"
                      max="120"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Double Gates */}
      <div className="border p-4 rounded-lg">
        <h3 className="font-medium text-lg mb-3">Double Gates</h3>
        <div className="flex items-center gap-4 mb-4">
          <label className="font-medium">Number of Double Gates:</label>
          <input 
            type="number" 
            name="doubleGates" 
            value={specs.doubleGates} 
            onChange={handleGateCountChange}
            className="p-2 border rounded w-20"
            min="0"
          />
        </div>
        
        {specs.doubleGates > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="flex flex-col gap-2">
                <label className="font-medium">Industrial Gate Latch?</label>
                <select 
                  name="industrialGateLatch" 
                  value={specs.industrialGateLatch} 
                  onChange={handleSpecsChange}
                  className="p-2 border rounded"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Gate Widths (inches)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: parseInt(specs.doubleGates) }).map((_, index) => (
                  <div key={`double-gate-${index}`} className="flex flex-col gap-2">
                    <label className="text-sm">Gate {index + 1} Width</label>
                    <input
                      type="number"
                      value={specs.doubleGateWidths[index] || 120}
                      onChange={(e) => handleGateWidthChange('double', index, e.target.value)}
                      className="p-2 border rounded"
                      min="48"
                      max="240"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Sliding Gates */}
      <div className="border p-4 rounded-lg">
        <h3 className="font-medium text-lg mb-3">Sliding Gates</h3>
        <div className="flex items-center gap-4 mb-4">
          <label className="font-medium">Number of Sliding Gates:</label>
          <input 
            type="number" 
            name="slidingGates" 
            value={specs.slidingGates} 
            onChange={handleGateCountChange}
            className="p-2 border rounded w-20"
            min="0"
          />
        </div>
        
        {specs.slidingGates > 0 && (
          <div className="mt-4">
            <h4 className="font-medium mb-2">Gate Widths (inches)</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Array.from({ length: parseInt(specs.slidingGates) }).map((_, index) => (
                <div key={`sliding-gate-${index}`} className="flex flex-col gap-2">
                  <label className="text-sm">Gate {index + 1} Width</label>
                  <input
                    type="number"
                    value={specs.slidingGateWidths[index] || 120}
                    onChange={(e) => handleGateWidthChange('sliding', index, e.target.value)}
                    className="p-2 border rounded"
                    min="48"
                    max="240"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GatesTab;