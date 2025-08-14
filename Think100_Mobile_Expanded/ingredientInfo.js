// Intelligence data for known ingredients
export function getIngredientInfo(name) {
  const db = {
    'Sucralose': {
      safety: '⚠️ Avoid – linked to gut dysbiosis',
      summary: 'Artificial sweetener shown to disrupt microbiome in studies.',
      studies: [
        { title: 'Sucralose alters gut microbiota', url: 'https://pubmed.ncbi.nlm.nih.gov/28459455/' }
      ],
      goals: {
        'gut health': false,
        'fat loss': neutral,
        'hormone balance': false
      }
    },
    'Red Dye #40': {
      safety: '⚠️ Risk – potential behavioral and hormonal effects',
      summary: 'Synthetic dye associated with hyperactivity and hormone disruption in animal models.',
      studies: [
        { title: 'Effects of synthetic food dyes on behavior', url: 'https://pubmed.ncbi.nlm.nih.gov/23026007/' }
      ],
      goals: {
        'gut health': false,
        'cognitive clarity': false,
        'hormone balance': false
      }
    },
    'Magnesium Glycinate': {
      safety: '✅ Safe – widely studied',
      summary: 'Highly absorbable form of magnesium known for calming effects and sleep support.',
      studies: [
        { title: 'Magnesium supplementation in sleep disorders', url: 'https://pubmed.ncbi.nlm.nih.gov/23853635/' }
      ],
      goals: {
        'sleep': true,
        'stress': true,
        'muscle recovery': true
      }
    }
  };

  return db[name] || {
    safety: '❓ Not yet rated',
    summary: 'No intelligence available for this ingredient.',
    studies: [],
    goals: {}
  };
}
