// calculatorData.js
// Contains all the static data for the calculator

// Post type options
export const postTypes = [
  { id: 1, name: '4x4x8' },
  { id: 2, name: '4x4x10' },
  { id: 3, name: '4x4x12' },
  { id: 4, name: '4x6x8' },
  { id: 5, name: '4x6x10' },
  { id: 6, name: '4x6x12' },
  { id: 7, name: '6x6x8' },
  { id: 8, name: '6x6x10' },
  { id: 9, name: '6x6x12' },
  { id: 10, name: 'Post master x 8\'' },
  { id: 11, name: 'Post master x 10\'' },
  { id: 12, name: 'Post master x 12\'' },
  { id: 13, name: '2 3/8" x 5\' Sch 20' },
  { id: 14, name: '2 3/8" x 6\' Sch 20' },
  { id: 15, name: '2 3/8" x 7\' Sch 20' },
  { id: 16, name: '2 3/8" x 8\' Sch 20' },
  { id: 17, name: '2 3/8" x 5\' Sch 40' },
  { id: 18, name: '2 3/8" x 6\' Sch 40' },
  { id: 19, name: '2 3/8" x 7\' Sch 40' },
  { id: 20, name: '2 3/8" x 8\' Sch 40' },
  { id: 21, name: '2 3/8" x 10.5\' Sch 40' },
  { id: 22, name: '2 3/8" x 12\' Sch 40' }
];

// Material items from spreadsheet
export const materialItems = [
  { id: 1, name: 'Post', description: '4x4x8', unitCost: 11.4 },
  { id: 2, name: '4x4x8 incense cedar gate posts', description: '', unitCost: 11.4 },
  { id: 3, name: 'Flanged posts centered', description: '2 3/8" x 6\' Sch 20', unitCost: 36.6 },
  { id: 4, name: 'Flanged posts off centered', description: '2 3/8" x 6\' Sch 20', unitCost: 36.6 },
  { id: 5, name: 'Concrete', description: 'sq. yard (Truck)', unitCost: 170 },
  { id: 6, name: 'Picket', description: '6\' Pine', unitCost: 2.1 },
  { id: 7, name: 'Picket for gate with baseboard', description: '8\' Pine', unitCost: 3.53 },
  { id: 8, name: '5/4 x 12 beveled deck board', description: '', unitCost: 8.42 },
  { id: 9, name: '2x4x8 incense cedar gate rail', description: '', unitCost: 9.88 },
  { id: 10, name: '2x4x10 treated', description: '', unitCost: 5.01 },
  { id: 11, name: '2x4x12 treated', description: '', unitCost: 7.67 },
  { id: 12, name: '2x4x16 treated', description: '', unitCost: 11.08 },
  { id: 13, name: '2x6x16 treated', description: '', unitCost: 14.98 },
  { id: 14, name: '2x12x16 treated', description: '', unitCost: 42.26 },
  { id: 15, name: 'Cap', description: '2x8x8 Cedar', unitCost: 16.66 },
  { id: 16, name: 'Trim', description: '1x4x8 Cedar', unitCost: 4.61 },
  { id: 17, name: 'Pipe tie/ wood to metal connector', description: '', unitCost: 1.72 },
  { id: 18, name: 'Post cap', description: '2 3/8"', unitCost: 1.28 },
  { id: 19, name: 'Lag screw (100pc)', description: '1/4" x 1 1/2"', unitCost: 19.6 },
  { id: 20, name: 'Gate hardware', description: 'Hinge post latch kit', unitCost: 32.34 },
  { id: 21, name: 'Cane bolt set (Wooden privacy)', description: '18"', unitCost: 22.05 },
  { id: 22, name: 'Industrial drop latch', description: '', unitCost: 51.94 },
  { id: 23, name: 'Industrial drop latch guides', description: '', unitCost: 5 },
  { id: 24, name: 'EMT', description: '', unitCost: 3 },
  { id: 25, name: 'Metal frames', description: '', unitCost: 250 },
  { id: 26, name: 'Framing screws', description: 'Star head wood deck screws - 3"', unitCost: 0.0784 },
  { id: 27, name: 'Picket nails', description: '', unitCost: 11.27 },
  { id: 28, name: 'Star head wood deck screws - 1 5/8"', description: '', unitCost: 0.1 },
  { id: 29, name: 'Wedge anchors', description: '1/2" x 3 3/4"', unitCost: 1 },
  { id: 30, name: 'Cantilever / sliding gate post', description: '4" x 9\' Sch 40', unitCost: 94.68 },
  { id: 31, name: 'Cantilever / sliding gate rollers', description: '', unitCost: 83.3 },
  { id: 32, name: 'Cantilever / sliding gate latch', description: '', unitCost: 22.68 },
  { id: 33, name: 'Custom item 1', description: '', unitCost: 0 },
  { id: 34, name: 'Custom item 2', description: '', unitCost: 0 },
  { id: 35, name: 'Custom item 3', description: '', unitCost: 0 },
  { id: 36, name: 'Custom item 4', description: '', unitCost: 0 },
  { id: 37, name: 'Custom item 5', description: '', unitCost: 0 }
];

// Default initial specs
export const defaultSpecs = {
  length: 655,
  picketOrientation: 'Vertical',
  fenceType: 'Privacy',
  fenceHeight: 6,
  numberOfPulls: 2,
  numberOfCorners: 0,
  picketWidth: 5.5,
  picketType: 'Pine',
  postSpacing: 6,
  numberOfRails: 2,
  postType: '4x4',
  flangedPostsCentered: 0,
  flangedPostsOffCentered: 0,
  holeDepth: 24,
  holeWidth: 9,
  concreteType: 'Truck',
  baseboard: 'None',
  capType: 'none',
  trimType: '1x4',
  woodType: 'Cedar',
  singleGates: 1,
  doubleGates: 0,
  slidingGates: 0,
  metalFrameGate: 'No',
  industrialGateLatch: 'No',
  usesScrews: 'No',
  singleGateWidths: [60],
  doubleGateWidths: [],
  slidingGateWidths: []
};

// Default customer info
export const defaultCustomerInfo = {
  name: '',
  address: '',
  phone: '',
  invoiceNumber: '20001',
  salesRep: 'Paul Vincent',
  crewLead: ''
};

// Default custom items
export const defaultCustomItems = {
  33: { name: '', description: '', quantity: 0 },
  34: { name: '', description: '', quantity: 0 },
  35: { name: '', description: '', quantity: 0 },
  36: { name: '', description: '', quantity: 0 },
  37: { name: '', description: '', quantity: 0 }
};

// Default project pricing
export const defaultProjectPricing = {
  minimumPrice: 14250,
  maximumPrice: 18000,
  quotedPrice: 18000
};