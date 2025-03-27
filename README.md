# Wood Fence Calculator

A comprehensive React application for calculating materials needed for wooden fence projects.

## Features

- Calculate materials based on fence specifications
- Supports various fence types and styles
- Handles single, double, and sliding gates
- Custom items support
- Project pricing calculations
- Printable pull list for job sites

## Project Structure

The project is organized into modular components:

- **calculatorData.js**: Contains all static data and default values
- **calculatorUtils.js**: Contains calculation functions
- **Components**:
  - SpecificationsTab: For fence specifications
  - GatesTab: For gate configurations
  - CustomerTab: For customer information
  - PricingTab: For project pricing analysis
  - CustomItemsTab: For custom materials
  - MaterialsTab: For viewing/editing calculated materials
  - ResultView: Printable view of pull list and pricing
  - WoodCalculator: Main component that combines all others

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/your-username/wood-fence-calculator.git
cd wood-fence-calculator
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm start
```

The application will open in your default browser at http://localhost:3000.

## Usage

1. Fill in the fence specifications (length, height, etc.)
2. Add gates if needed
3. Enter customer information
4. Click "Calculate Materials" to generate a materials list
5. Review the calculated materials and adjust if needed
6. Use the "Print Materials List" button to generate a printable pull list

## Built With

- React - JavaScript library for building user interfaces
- Tailwind CSS - Utility-first CSS framework

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on real-world fence contractor calculations
- Designed for accuracy and ease of use in the field