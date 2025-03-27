// calculatorUtils.js
// Contains calculation functions for the wood calculator

import { materialItems } from './calculatorData';
import { posts, pickets, caps, concrete, miscMaterials, flangedPosts } from './materialCosts';

// Calculate material quantities based on specifications
export const calculateMaterials = (specs) => {
  const {
    length,
    picketOrientation,
    fenceType,
    fenceHeight,
    numberOfPulls,
    numberOfCorners,
    picketWidth,
    picketType,
    postSpacing,
    numberOfRails,
    postType,
    flangedPostsCentered,
    flangedPostsOffCentered,
    holeDepth,
    holeWidth,
    concreteType,
    baseboard,
    capType,
    trimType,
    woodType,
    singleGates,
    doubleGates,
    slidingGates,
    metalFrameGate,
    industrialGateLatch,
    usesScrews,
    singleGateWidths,
    doubleGateWidths,
    slidingGateWidths
  } = specs;

  // Initialize quantities
  const quantities = {};
  materialItems.forEach(item => {
    quantities[item.id] = 0;
  });

  // Calculate total gate width
  const totalGateWidth = [
    ...singleGateWidths,
    ...doubleGateWidths.map(w => w * 2),
    ...slidingGateWidths
  ].reduce((sum, width) => sum + width, 0) / 12; // Convert inches to feet

  // Calculate effective length (total length minus gate widths)
  const effectiveLength = length - totalGateWidth;

  // Calculate posts (Item 1)
  const totalPostCount = Math.ceil(effectiveLength / (postSpacing - 0.5)) + 
    (parseInt(singleGates) * 2) + 
    (parseInt(doubleGates) * 2) +
    (parseInt(slidingGates) * 2) +
    parseInt(numberOfPulls) +
    parseInt(numberOfCorners);
  quantities[1] = totalPostCount;

  // Gate posts (Item 2)
  quantities[2] = (parseInt(singleGates) * 2) + (parseInt(doubleGates) * 2) + (parseInt(slidingGates) * 2);

  // Flanged posts calculations (Items 3 & 4)
  quantities[3] = parseInt(flangedPostsCentered) || 0;
  quantities[4] = parseInt(flangedPostsOffCentered) || 0;

  // Concrete (Item 5)
  // Formula: (post holes * depth * width^2 * 0.00058) / 27 for cubic yards
  const postHoles = totalPostCount + parseInt(flangedPostsCentered) + parseInt(flangedPostsOffCentered);
  const concreteCubicFeet = postHoles * holeDepth * Math.pow(holeWidth, 2) * 0.00058;
  const concreteCubicYards = concreteCubicFeet / 27;
  quantities[5] = Math.ceil(concreteCubicYards);

  // Pickets (Item 6)
  let picketCount;
  if (picketOrientation.toLowerCase() === 'vertical') {
    const picketWidthInFeet = picketWidth / 12;
    const picketsPerFoot = 1 / picketWidthInFeet;
    picketCount = Math.ceil(effectiveLength * picketsPerFoot);
  } else {
    // Horizontal pickets formula
    const picketsPerFoot = fenceHeight / (picketWidth / 12);
    picketCount = Math.ceil(effectiveLength * picketsPerFoot);
  }
  quantities[6] = picketCount;

  // Gate pickets (Item 7)
  const gatePickets = picketOrientation.toLowerCase() === 'vertical' 
    ? Math.ceil(totalGateWidth * (12 / picketWidth))
    : Math.ceil(fenceHeight / (picketWidth / 12)) * (parseInt(singleGates) + parseInt(doubleGates) * 2);
  quantities[7] = gatePickets;

  // Rails calculation (Item 11)
  if (picketOrientation.toLowerCase() === 'vertical') {
    const railsPerSection = Math.ceil(effectiveLength / 12); // 12ft sections
    quantities[11] = railsPerSection * numberOfRails;
  }

  // Gate rails (Item 9 & 10)
  quantities[9] = parseInt(singleGates) * 3; // 2x4x8 cedar gate rails
  quantities[10] = doubleGateWidths.some(w => w > 96) ? parseInt(doubleGates) * 3 : 0; // 2x4x10 treated for large gates

  // Cap rail calculation (if applicable)
  if (capType !== 'none') {
    const capRailLength = Math.ceil(effectiveLength / 8); // 8ft sections
    quantities[12] = capRailLength;
  }

  // Base rail calculation (if applicable)
  if (baseboard !== 'none') {
    const baseRailLength = Math.ceil(effectiveLength / 8); // 8ft sections
    quantities[13] = baseRailLength;
  }

  // Hardware calculations
  if (usesScrews) {
    // Screws (3 per picket connection)
    quantities[14] = (picketCount + gatePickets) * 3;
  } else {
    // Nails (1 roll per 100 pickets)
    quantities[15] = Math.ceil((picketCount + gatePickets) / 100);
  }

  // Gate hardware
  quantities[16] = parseInt(singleGates); // Gate hinge and latch kits
  quantities[17] = parseInt(doubleGates); // Cane bolt sets
  quantities[18] = industrialGateLatch ? parseInt(doubleGates) + parseInt(slidingGates) : 0; // Industrial latches

  // Metal frame gates
  quantities[19] = metalFrameGate ? parseInt(singleGates) + parseInt(doubleGates) * 2 : 0;

  // Sliding gate hardware
  if (parseInt(slidingGates) > 0) {
    quantities[20] = parseInt(slidingGates); // Roller sets
    quantities[21] = parseInt(slidingGates); // Sliding gate latches
  }

  return quantities;
};

// Calculate costs based on quantities and material costs
export const calculateCosts = (quantities) => {
  const itemCosts = {};
  let totalCost = 0;

  materialItems.forEach(item => {
    const quantity = quantities[item.id] || 0;
    const unitCost = getMaterialCost(item);
    const cost = quantity * unitCost;
    itemCosts[item.id] = cost;
    totalCost += cost;
  });

  return { itemCosts, totalCost };
};

// Helper function to get material cost based on type
const getMaterialCost = (item) => {
  switch (item.category) {
    case 'posts':
      return posts[item.type][item.size] || 0;
    case 'pickets':
      return pickets[item.woodType][item.height] || 0;
    case 'caps':
      return caps[item.woodType][item.size] || 0;
    case 'concrete':
      return concrete[item.type] || 0;
    case 'misc':
      return miscMaterials[item.name] || 0;
    case 'flangedPosts':
      return flangedPosts[item.type][item.size] || 0;
    default:
      return 0;
  }
};

// Calculate commission based on price
export const calculateCommission = (price) => {
  return price * 0.10; // 10% commission
};

// Calculate grand total with tax
export const calculateGrandTotal = (totalCost, taxRate) => {
  const tax = totalCost * (taxRate / 100);
  return totalCost + tax;
};