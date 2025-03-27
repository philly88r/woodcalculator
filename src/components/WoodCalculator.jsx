// WoodCalculator.jsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

// Import data and utilities
import { 
  materialItems, 
  defaultSpecs, 
  defaultCustomerInfo, 
  defaultCustomItems, 
  defaultProjectPricing 
} from '../calculatorData';
import { calculateMaterials, calculateCosts } from '../calculatorUtils';

// Import tab components
import SpecificationsTab from './SpecificationsTab';
import GatesTab from './GatesTab';
import CustomerTab from './CustomerTab';
import PricingTab from './PricingTab';
import CustomItemsTab from './CustomItemsTab';
import MaterialsTab from './MaterialsTab';
import ResultView from './ResultView';
import FormulaInputForm from './FormulaInputForm';

const WoodCalculator = () => {
  const [activeTab, setActiveTab] = useState('formulas'); 
  const [showResults, setShowResults] = useState(false);
  
  // State management
  const [specs, setSpecs] = useState(defaultSpecs);
  const [customerInfo, setCustomerInfo] = useState(defaultCustomerInfo);
  const [customItems, setCustomItems] = useState(defaultCustomItems);
  const [projectPricing, setProjectPricing] = useState(defaultProjectPricing);
  
  const [quantities, setQuantities] = useState({});
  const [costs, setCosts] = useState({ itemCosts: {}, totalCost: 0 });
  const [taxRate, setTaxRate] = useState(8.25);
  const [formulas, setFormulas] = useState(null);
  
  // Calculate materials when specs change or calculate button is clicked
  useEffect(() => {
    if (showResults) {
      const calculatedQuantities = calculateMaterials(specs);
      setQuantities(prev => ({ ...prev, ...calculatedQuantities }));
      
      // Update custom items quantities
      Object.entries(customItems).forEach(([id, item]) => {
        if (item.quantity > 0) {
          calculatedQuantities[id] = item.quantity;
        }
      });
      
      const calculatedCosts = calculateCosts(calculatedQuantities);
      setCosts(calculatedCosts);
    }
  }, [specs, showResults, customItems]);
  
  // Event handlers
  const handleSpecsChange = (e) => {
    const { name, value } = e.target;
    setSpecs(prev => ({
      ...prev,
      [name]: value
    }));
    setShowResults(false);
  };
  
  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleGateCountChange = (e) => {
    const { name, value } = e.target;
    const count = parseInt(value) || 0;
    const widthsName = `${name}Widths`;
    
    // Create an array with the right number of gate widths
    const currentWidths = specs[widthsName] || [];
    let newWidths = [...currentWidths];
    
    if (count > currentWidths.length) {
      // Add more default widths (60" for single, 120" for double/sliding)
      const defaultWidth = name === 'singleGates' ? 60 : 120;
      for (let i = currentWidths.length; i < count; i++) {
        newWidths.push(defaultWidth);
      }
    } else {
      // Remove extra widths
      newWidths = newWidths.slice(0, count);
    }
    
    setSpecs(prev => ({
      ...prev,
      [name]: count,
      [widthsName]: newWidths
    }));
    setShowResults(false);
  };
  
  const handleGateWidthChange = (type, index, value) => {
    const widthsName = `${type}GateWidths`;
    const newWidths = [...specs[widthsName]];
    newWidths[index] = parseInt(value);
    
    setSpecs(prev => ({
      ...prev,
      [widthsName]: newWidths
    }));
    setShowResults(false);
  };
  
  const handleQuantityChange = (id, value) => {
    const newQuantity = parseInt(value) || 0;
    setQuantities(prev => ({
      ...prev,
      [id]: newQuantity
    }));
    
    // Update costs
    const newQuantities = { ...quantities, [id]: newQuantity };
    const newCosts = calculateCosts(newQuantities);
    setCosts(newCosts);
  };
  
  const handleCustomItemChange = (id, field, value) => {
    setCustomItems(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: field === 'quantity' ? (parseInt(value) || 0) : value
      }
    }));
    
    // Update quantities and costs for custom items
    if (field === 'quantity') {
      const newQuantity = parseInt(value) || 0;
      setQuantities(prev => ({
        ...prev,
        [id]: newQuantity
      }));
      
      // Update costs
      const newQuantities = { ...quantities, [id]: newQuantity };
      const newCosts = calculateCosts(newQuantities);
      setCosts(newCosts);
    }
  };
  
  const handleProjectPricingChange = (field, value) => {
    const numValue = parseFloat(value) || 0;
    setProjectPricing(prev => ({
      ...prev,
      [field]: numValue
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate materials immediately when the button is clicked
    const calculatedQuantities = calculateMaterials(specs);
    setQuantities(calculatedQuantities);
    
    // Update custom items quantities
    Object.entries(customItems).forEach(([id, item]) => {
      if (item.quantity > 0) {
        calculatedQuantities[id] = item.quantity;
      }
    });
    
    // Calculate costs
    const calculatedCosts = calculateCosts(calculatedQuantities);
    setCosts(calculatedCosts);
    
    // Show results and switch to materials tab
    setShowResults(true);
    setActiveTab('materials');
  };
  
  const handlePrint = () => {
    window.print();
  };

  const handleFormulaSave = (formulaData) => {
    setFormulas(formulaData);
    console.log('Formulas saved:', formulaData);
    // You can add additional logic here if needed
  };
  
  return (
    <div className="flex flex-col gap-6 p-4 max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Wood Fence Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap border-b mb-4 no-print">
            <button 
              className={`py-2 px-4 ${activeTab === 'formulas' ? 'border-b-2 border-blue-600 font-medium' : ''}`}
              onClick={() => setActiveTab('formulas')}
            >
              Formulas
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'specs' ? 'border-b-2 border-blue-600 font-medium' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Project Specifications
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'gates' ? 'border-b-2 border-blue-600 font-medium' : ''}`}
              onClick={() => setActiveTab('gates')}
            >
              Gates
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'customer' ? 'border-b-2 border-blue-600 font-medium' : ''}`}
              onClick={() => setActiveTab('customer')}
            >
              Customer Information
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'pricing' ? 'border-b-2 border-blue-600 font-medium' : ''}`}
              onClick={() => setActiveTab('pricing')}
            >
              Project Pricing
            </button>
            <button 
              className={`py-2 px-4 ${activeTab === 'custom' ? 'border-b-2 border-blue-600 font-medium' : ''}`}
              onClick={() => setActiveTab('custom')}
            >
              Custom Items
            </button>
            {showResults && (
              <button 
                className={`py-2 px-4 ${activeTab === 'materials' ? 'border-b-2 border-blue-600 font-medium' : ''}`}
                onClick={() => setActiveTab('materials')}
              >
                Materials List
              </button>
            )}
          </div>
          
          {activeTab === 'formulas' && (
            <FormulaInputForm onSave={handleFormulaSave} />
          )}
          
          <form onSubmit={handleSubmit} className={`no-print ${activeTab === 'formulas' ? 'hidden' : ''}`}>
            {activeTab === 'specs' && (
              <SpecificationsTab 
                specs={specs} 
                handleSpecsChange={handleSpecsChange} 
              />
            )}
            
            {activeTab === 'gates' && (
              <GatesTab 
                specs={specs} 
                handleSpecsChange={handleSpecsChange}
                handleGateCountChange={handleGateCountChange}
                handleGateWidthChange={handleGateWidthChange}
              />
            )}
            
            {activeTab === 'customer' && (
              <CustomerTab 
                customerInfo={customerInfo}
                handleCustomerInfoChange={handleCustomerInfoChange}
              />
            )}
            
            {activeTab === 'pricing' && (
              <PricingTab 
                projectPricing={projectPricing}
                handleProjectPricingChange={handleProjectPricingChange}
                costs={costs}
                taxRate={taxRate}
                setTaxRate={setTaxRate}
              />
            )}
            
            {activeTab === 'custom' && (
              <CustomItemsTab 
                customItems={customItems}
                handleCustomItemChange={handleCustomItemChange}
              />
            )}
            
            {activeTab === 'materials' && showResults && (
              <MaterialsTab 
                quantities={quantities}
                handleQuantityChange={handleQuantityChange}
                costs={costs}
              />
            )}
            
            <div className="flex justify-center space-x-4 mt-6">
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium"
              >
                Calculate Materials
              </button>
              
              {showResults && (
                <button 
                  type="button" 
                  onClick={handlePrint}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-medium"
                >
                  Print Materials List
                </button>
              )}
            </div>
          </form>

          {showResults && (
            <ResultView 
              customerInfo={customerInfo}
              specs={specs}
              quantities={quantities}
              costs={costs}
              taxRate={taxRate}
              projectPricing={projectPricing}
              customItems={customItems}
            />
          )}
        </CardContent>
      </Card>
      
      <style>{`
        @media print {
          * {
            font-size: 12pt;
          }
          .no-print {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          .print-break-avoid {
            page-break-inside: avoid;
          }
        }
        
        @media screen {
          .print-only {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WoodCalculator;