// App.jsx
import React, { useState } from 'react';
import WoodCalculator from './components/WoodCalculator';
import FarmFencePage from './components/FarmFencePage';

function App() {
  const [activePage, setActivePage] = useState('wood'); // Default to wood calculator

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex justify-center space-x-4 mb-6">
          <button 
            onClick={() => setActivePage('wood')}
            className={`py-2 px-6 rounded-lg font-medium ${activePage === 'wood' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Wood Fence Calculator
          </button>
          <button 
            onClick={() => setActivePage('farm')}
            className={`py-2 px-6 rounded-lg font-medium ${activePage === 'farm' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Farm Fence Calculator
          </button>
        </div>
      </div>
      
      {activePage === 'wood' ? <WoodCalculator /> : <FarmFencePage />}
    </div>
  );
}

export default App;