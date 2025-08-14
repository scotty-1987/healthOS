// Expanded mock product lookup
export function getProductData(barcode) {
  const productDB = {
    '0123456789012': {
      name: 'Magnesium Glycinate - Thorne',
      score: '✅ 92/100 - Clinically backed formula',
      ingredients: [
        { name: 'Magnesium Glycinate (200mg)', flag: false },
        { name: 'Hypromellose (capsule)', flag: false },
        { name: 'Leucine', flag: false }
      ],
      alternatives: []
    },
    '8888000111222': {
      name: 'Ultra Pre Workout',
      score: '⚠️ 38/100 - Contains questionable ingredients',
      ingredients: [
        { name: 'Sucralose', flag: true },
        { name: 'Beta-Alanine', flag: false },
        { name: 'Caffeine (300mg)', flag: false },
        { name: 'Red Dye #40', flag: true }
      ],
      alternatives: [
        { name: 'Transparent Labs BULK', url: 'https://www.transparentlabs.com/' },
        { name: 'Kaged Pre-Kaged', url: 'https://www.kaged.com/' }
      ]
    },
    '748927022127': {
      name: 'ON Gold Standard Whey',
      score: '⚠️ 72/100 - Contains artificial sweeteners',
      ingredients: [
        { name: 'Whey Protein Isolate', flag: false },
        { name: 'Natural & Artificial Flavors', flag: false },
        { name: 'Sucralose', flag: true },
        { name: 'Lecithin', flag: false }
      ],
      alternatives: []
    },
    '850018985030': {
      name: 'Athletic Greens AG1',
      score: '✅ 95/100 - Clean formulation',
      ingredients: [
        { name: 'Spirulina', flag: false },
        { name: 'Chlorella', flag: false },
        { name: 'Ashwagandha', flag: false },
        { name: 'Stevia', flag: false }
      ],
      alternatives: []
    },
    '842595113432': {
      name: 'C4 Energy Drink',
      score: '⚠️ 40/100 - High stimulant load',
      ingredients: [
        { name: 'Caffeine Anhydrous', flag: false },
        { name: 'Beta Alanine', flag: false },
        { name: 'Sucralose', flag: true },
        { name: 'Acesulfame Potassium', flag: true }
      ],
      alternatives: [
        { name: 'RYSE Fuel', url: 'https://www.rysesupps.com/' },
        { name: 'Clean Cause Yerba', url: 'https://cleancause.com/' }
      ]
    }
  };

  return productDB[barcode] || {
    name: 'Unknown Product',
    score: '❓ No data found for this product.',
    ingredients: [],
    alternatives: []
  };
}
