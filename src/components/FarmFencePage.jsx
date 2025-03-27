import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import FarmFenceFormulaForm from './FarmFenceFormulaForm';

const FarmFencePage = () => {
  const handleFormulaSave = (formulaData) => {
    localStorage.setItem('farmFenceCalculatorFormulas', JSON.stringify(formulaData));
    console.log('Farm Fence Formulas saved:', formulaData);
  };

  return (
    <div className="flex flex-col gap-6 p-4 max-w-6xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Farm Fence Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <FarmFenceFormulaForm onSave={handleFormulaSave} />
        </CardContent>
      </Card>
    </div>
  );
};

export default FarmFencePage;
