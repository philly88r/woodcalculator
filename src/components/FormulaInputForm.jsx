import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const FormulaInputForm = ({ onSave }) => {
  const [formulas, setFormulas] = useState({
    posts: '',
    gatePosts: '',
    pulls: '',
    corners: '',
    pickets: '',
    verticalPickets: '',
    horizontalPickets: '',
    gatePickets: '',
    rails: '',
    gateRails: '',
    capRail: '',
    baseRail: '',
    concrete: '',
    hardware: '',
    screws: '',
    nails: '',
    gateHardware: '',
    slidingGateHardware: '',
    customItems: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulas(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Convert to JSON and save
    const formulasJson = JSON.stringify(formulas, null, 2);
    
    // Create a blob and download it
    const blob = new Blob([formulasJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fence_calculator_formulas.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Call the onSave callback if provided
    if (onSave) {
      onSave(formulas);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Fence Calculator Formulas</CardTitle>
        <p className="text-gray-600">
          Please describe each calculation formula in natural language. These will be used to implement the calculator logic.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Post Calculations</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Regular Posts Formula</label>
                <textarea 
                  name="posts" 
                  value={formulas.posts} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Total posts = (fence length / post spacing) + 1 + any additional posts for gates, corners, and pulls"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Gate Posts Formula</label>
                <textarea 
                  name="gatePosts" 
                  value={formulas.gatePosts} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Gate posts = (number of single gates × 2) + (number of double gates × 2) + (number of sliding gates × 2)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Pulls Formula</label>
                <textarea 
                  name="pulls" 
                  value={formulas.pulls} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Describe how pulls are calculated and what additional materials they require"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Corners Formula</label>
                <textarea 
                  name="corners" 
                  value={formulas.corners} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Describe how corners are calculated and what additional materials they require"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Picket Calculations</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Vertical Pickets Formula</label>
                <textarea 
                  name="verticalPickets" 
                  value={formulas.verticalPickets} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Number of pickets = (effective fence length / picket width) + additional pickets for spacing"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Horizontal Pickets Formula</label>
                <textarea 
                  name="horizontalPickets" 
                  value={formulas.horizontalPickets} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Number of horizontal pickets = (fence height / picket width) × effective fence length"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Gate Pickets Formula</label>
                <textarea 
                  name="gatePickets" 
                  value={formulas.gatePickets} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Gate pickets = (total gate width / picket width) for vertical orientation"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rail Calculations</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Rails Formula</label>
                <textarea 
                  name="rails" 
                  value={formulas.rails} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Number of rails = (fence length / rail length) × number of rails per section"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Gate Rails Formula</label>
                <textarea 
                  name="gateRails" 
                  value={formulas.gateRails} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Gate rails = number of gates × rails per gate"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Cap Rail Formula</label>
                <textarea 
                  name="capRail" 
                  value={formulas.capRail} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Cap rail length = ceiling(effective fence length / cap rail section length)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Base Rail Formula</label>
                <textarea 
                  name="baseRail" 
                  value={formulas.baseRail} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Base rail length = ceiling(effective fence length / base rail section length)"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Materials</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Concrete Formula</label>
                <textarea 
                  name="concrete" 
                  value={formulas.concrete} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Concrete (cubic yards) = (number of post holes × hole depth × hole width²) / 27"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Hardware Formulas</label>
                <textarea 
                  name="hardware" 
                  value={formulas.hardware} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Describe formulas for various hardware items"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Screws Formula</label>
                <textarea 
                  name="screws" 
                  value={formulas.screws} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Number of screws = (total pickets + gate pickets) × screws per picket"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Nails Formula</label>
                <textarea 
                  name="nails" 
                  value={formulas.nails} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Nail rolls = ceiling((total pickets + gate pickets) / pickets per roll)"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Gate Hardware</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Gate Hardware Formula</label>
                <textarea 
                  name="gateHardware" 
                  value={formulas.gateHardware} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Formulas for hinges, latches, and other gate hardware"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Sliding Gate Hardware Formula</label>
                <textarea 
                  name="slidingGateHardware" 
                  value={formulas.slidingGateHardware} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: Formulas for sliding gate rollers, tracks, and other hardware"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Custom Items Formula</label>
                <textarea 
                  name="customItems" 
                  value={formulas.customItems} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Example: How custom items should be calculated or integrated"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Additional Notes</label>
                <textarea 
                  name="additionalNotes" 
                  value={formulas.additionalNotes} 
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md min-h-[100px]"
                  placeholder="Any additional formulas, rules, or considerations for the calculator"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button 
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium text-lg"
          >
            Save Formulas as JSON
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FormulaInputForm;
