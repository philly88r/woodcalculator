// Material costs for wood fence calculator

export const posts = {
  treated: {
    "4x4x8": 11.40,
    "4x4x10": 13.84,
    "4x4x12": 16.72,
    "4x6x8": 17.55,
    "4x6x10": 27.67,
    "4x6x12": 24.78,
    "6x6x8": 28.59,
    "6x6x10": 55.29,
    "6x6x12": 63.97,
  },
  postMaster: {
    "8ft": 29.72,
    "10ft": 72.68,
    "12ft": 89.78,
  },
  schedule20: {
    "2-3/8x5": 15.00,
    "2-3/8x6": 18.00,
    "2-3/8x7": 21.00,
    "2-3/8x8": 24.00,
  },
  schedule40: {
    "2-3/8x5": 19.55,
    "2-3/8x6": 23.46,
    "2-3/8x7": 27.37,
    "2-3/8x8": 31.28,
    "2-3/8x10.5": 41.446,
    "2-3/8x12": 46.92,
  }
};

export const pickets = {
  pine: {
    "6": 2.10,
    "8": 3.53,
  },
  cedar: {
    "6": 2.61,
    "8": 4.17,
  }
};

export const caps = {
  pine: {
    "1x4x8": 3.16,
    "2x4x8": 3.74,
    "2x6x8": 7.83,
    "2x8x8": 11.51,
  },
  cedar: {
    "1x4x8": 4.61,
    "2x4x8": 9.88,
    "2x6x8": 16.66,
    "2x8x8": 16.66,
  }
};

export const concrete = {
  red: 8.53,    // per bag
  yellow: 5.89, // per bag
  truck: 170,   // per sq yard
};

export const miscMaterials = {
  "5/4x12BeveledDeckBoard": 8.42,
  "2x4x8Treated": 3.74,
  "2x4x10Treated": 5.01,
  "2x4x12Treated": 7.67,
  "2x4x16Treated": 11.08,
  "2x6x16Treated": 14.98,
  "2x12x16Treated": 42.26,
  "pipeWoodConnector": 1.72,
  "postCap": 1.28,
  "lagScrews100pc": 19.60,
  "gateHingePostLatchKit": 32.34,
  "caneBoltSet": 22.05,
  "industrialDropLatch": 51.94,
  "industrialDropLatchGuides": 5.00,
  "emt": 3.00,
  "metalGateFrame": 250.00,
  "starHeadScrews3inch": 0.0784, // per screw (1lb price / 100)
  "picketNailsRoll": 11.27,
  "starHeadScrews1_5inch": 0.10,
  "wedgeAnchors": 1.00,
  "slidingGateRollers": 83.30,
  "slidingGateLatch": 22.68,
  "cedarGateRail2x4x8": 9.88,
  "cedarGatePost4x4x8": 11.40,
};

export const flangedPosts = {
  schedule20: {
    "2-3/8x3": 9.00,
    "2-3/8x4": 12.00,
    "2-3/8x6": 18.00,
    "2-3/8x8": 24.00,
  },
  flangedBase: 18.57,
};
