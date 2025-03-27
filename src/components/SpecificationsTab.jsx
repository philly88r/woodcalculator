// SpecificationsTab.jsx
import React from 'react';

const SpecificationsTab = ({ specs, handleSpecsChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div className="flex flex-col gap-2">
        <label className="font-medium">Total Linear Length (feet)</label>
        <input 
          type="number" 
          name="length" 
          value={specs.length} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="1"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Picket Orientation</label>
        <select 
          name="picketOrientation" 
          value={specs.picketOrientation} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="Vertical">Vertical</option>
          <option value="Horizontal">Horizontal</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Fence Type</label>
        <select 
          name="fenceType" 
          value={specs.fenceType} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="Privacy">Privacy</option>
          <option value="Semi-privacy">Semi-privacy</option>
          <option value="Shadow box">Shadow box</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Fence Height (feet)</label>
        <input 
          type="number" 
          name="fenceHeight" 
          value={specs.fenceHeight} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="1"
          max="10"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Number of Stretches/Pulls</label>
        <input 
          type="number" 
          name="numberOfPulls" 
          value={specs.numberOfPulls} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="0"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Number of Corners</label>
        <input 
          type="number" 
          name="numberOfCorners" 
          value={specs.numberOfCorners} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="0"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Width of Picket (inches)</label>
        <input 
          type="number" 
          name="picketWidth" 
          value={specs.picketWidth} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="1"
          step="0.5"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Type of Picket</label>
        <select 
          name="picketType" 
          value={specs.picketType} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="Pine">Pine</option>
          <option value="Cedar">Cedar</option>
          <option value="Treated">Treated</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Post Spacing (feet)</label>
        <input 
          type="number" 
          name="postSpacing" 
          value={specs.postSpacing} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="1"
          max="10"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Number of Rails</label>
        <input 
          type="number" 
          name="numberOfRails" 
          value={specs.numberOfRails} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="1"
          max="4"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Type of Posts</label>
        <select 
          name="postType" 
          value={specs.postType} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="4x4">4x4</option>
          <option value="4x6">4x6</option>
          <option value="6x6">6x6</option>
          <option value="Post master">Post master</option>
          <option value="2 3/8&quot; Sch 20">2 3/8" Sch 20</option>
          <option value="2 3/8&quot; Sch 40">2 3/8" Sch 40</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Number of Flanged Posts Centered</label>
        <input 
          type="number" 
          name="flangedPostsCentered" 
          value={specs.flangedPostsCentered} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="0"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Number of Flanged Posts Off Centered</label>
        <input 
          type="number" 
          name="flangedPostsOffCentered" 
          value={specs.flangedPostsOffCentered} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="0"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Depth of Hole (inches)</label>
        <input 
          type="number" 
          name="holeDepth" 
          value={specs.holeDepth} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="0"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Width of Hole (inches)</label>
        <input 
          type="number" 
          name="holeWidth" 
          value={specs.holeWidth} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
          min="0"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Concrete Type</label>
        <select 
          name="concreteType" 
          value={specs.concreteType} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="Truck">Truck</option>
          <option value="Bag">Bag</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Baseboard</label>
        <select 
          name="baseboard" 
          value={specs.baseboard} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="None">None</option>
          <option value="2x6">2x6</option>
          <option value="2x12">2x12</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Type of Cap</label>
        <select 
          name="capType" 
          value={specs.capType} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="none">None</option>
          <option value="2x4">2x4</option>
          <option value="2x6">2x6</option>
          <option value="2x8">2x8</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Type of Trim</label>
        <select 
          name="trimType" 
          value={specs.trimType} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="none">None</option>
          <option value="1x4">1x4</option>
          <option value="2x4">2x4</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Type of Wood for Cap & Trim</label>
        <select 
          name="woodType" 
          value={specs.woodType} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="Cedar">Cedar</option>
          <option value="Pine">Pine</option>
          <option value="Treated">Treated</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="font-medium">Screws?</label>
        <select 
          name="usesScrews" 
          value={specs.usesScrews} 
          onChange={handleSpecsChange}
          className="p-2 border rounded"
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
  );
};

export default SpecificationsTab;