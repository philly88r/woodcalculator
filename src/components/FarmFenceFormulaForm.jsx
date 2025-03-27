import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const FarmFenceFormulaForm = ({ onSave }) => {
  const [formulas, setFormulas] = useState({
    metalStraightHBrace: '',
    metalCornerHBrace: '',
    hBracePost: '',
    hBraceCrossBar: '',
    hBraceTightenerRod: '',
    hBraceWire: '',
    terminalCornerPost: '',
    gatePost: '',
    linePost: '',
    flangedPostsCentered: '',
    flangedPostsOffCentered: '',
    tPost: '',
    netWire: '',
    singleStrandWire: '',
    panels: '',
    topRail: '',
    firstMiddleRail: '',
    secondMiddleRail: '',
    bottomRail: '',
    trimBoard: '',
    cap: '',
    concreteBags: '',
    staplesLarge: '',
    staplesSmall: '',
    screws: '',
    jBolt: '',
    tPostClips: '',
    terminalPostCap: '',
    gatePostCap: '',
    linePostCap: '',
    straightHBraceCap: '',
    cornerHBraceCap: '',
    customCapForPosts: '',
    numberOfSingleGates: '',
    numberOfDoubleGates: '',
    notchCharge: '',
    customItem1: '',
    customItem2: '',
    customItem3: '',
    customItem4: '',
    customItem5: '',
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
    a.download = 'farm_fence_calculator_formulas.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Call the onSave callback if provided
    if (onSave) {
      onSave(formulas);
    }
  };

  // Group the form fields for better organization
  const formGroups = [
    {
      title: "H-Brace Components",
      fields: [
        { name: "metalStraightHBrace", label: "Metal Straight H Brace" },
        { name: "metalCornerHBrace", label: "Metal Corner H Brace" },
        { name: "hBracePost", label: "H Brace Post" },
        { name: "hBraceCrossBar", label: "H Brace Cross Bar" },
        { name: "hBraceTightenerRod", label: "H Brace Tightener Rod" },
        { name: "hBraceWire", label: "H Brace Wire" }
      ]
    },
    {
      title: "Posts",
      fields: [
        { name: "terminalCornerPost", label: "Terminal/Corner Post" },
        { name: "gatePost", label: "Gate Post" },
        { name: "linePost", label: "Line Post" },
        { name: "flangedPostsCentered", label: "Flanged Posts Centered" },
        { name: "flangedPostsOffCentered", label: "Flanged Posts Off Centered" },
        { name: "tPost", label: "T-Post" }
      ]
    },
    {
      title: "Fencing Materials",
      fields: [
        { name: "netWire", label: "Net Wire" },
        { name: "singleStrandWire", label: "Single Strand Wire" },
        { name: "panels", label: "Panels" }
      ]
    },
    {
      title: "Rails",
      fields: [
        { name: "topRail", label: "Top Rail" },
        { name: "firstMiddleRail", label: "First Middle Rail" },
        { name: "secondMiddleRail", label: "Second Middle Rail" },
        { name: "bottomRail", label: "Bottom Rail" }
      ]
    },
    {
      title: "Trim and Caps",
      fields: [
        { name: "trimBoard", label: "Trim Board" },
        { name: "cap", label: "Cap" },
        { name: "terminalPostCap", label: "Terminal Post Cap" },
        { name: "gatePostCap", label: "Gate Post Cap" },
        { name: "linePostCap", label: "Line Post Cap" },
        { name: "straightHBraceCap", label: "Straight H Brace Cap" },
        { name: "cornerHBraceCap", label: "Corner H Brace Cap" },
        { name: "customCapForPosts", label: "Custom Cap for Posts" }
      ]
    },
    {
      title: "Hardware and Fasteners",
      fields: [
        { name: "concreteBags", label: "Concrete (bags)" },
        { name: "staplesLarge", label: "Staples Large" },
        { name: "staplesSmall", label: "Staples Small" },
        { name: "screws", label: "Screws" },
        { name: "jBolt", label: "J Bolt" },
        { name: "tPostClips", label: "T-Post Clips" }
      ]
    },
    {
      title: "Gates and Custom Items",
      fields: [
        { name: "numberOfSingleGates", label: "Number of Single Gates" },
        { name: "numberOfDoubleGates", label: "Number of Double Gates" },
        { name: "notchCharge", label: "Notch Charge" },
        { name: "customItem1", label: "Custom Item 1" },
        { name: "customItem2", label: "Custom Item 2" },
        { name: "customItem3", label: "Custom Item 3" },
        { name: "customItem4", label: "Custom Item 4" },
        { name: "customItem5", label: "Custom Item 5" }
      ]
    }
  ];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Farm Fence Calculator Formulas</CardTitle>
        <p className="text-gray-600">
          Please describe each calculation formula in natural language. These will be used to implement the farm fence calculator logic.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6">
          {formGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
              <div className="space-y-4">
                {group.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex}>
                    <label className="block text-sm font-medium mb-1">{field.label} Formula</label>
                    <textarea 
                      name={field.name} 
                      value={formulas[field.name]} 
                      onChange={handleChange}
                      className="w-full p-2 border rounded-md min-h-[100px]"
                      placeholder={`Example: How to calculate ${field.label.toLowerCase()} quantities and costs`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Additional Notes</label>
              <textarea 
                name="additionalNotes" 
                value={formulas.additionalNotes} 
                onChange={handleChange}
                className="w-full p-2 border rounded-md min-h-[100px]"
                placeholder="Any additional formulas, rules, or considerations for the farm fence calculator"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button 
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium text-lg"
          >
            Save Farm Fence Formulas as JSON
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarmFenceFormulaForm;
