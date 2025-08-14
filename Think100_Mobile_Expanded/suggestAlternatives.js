export function suggestAlternatives(analysis) {
  const suggestions = [];

  const altProducts = [
    {
      name: 'Thorne Ashwagandha',
      ingredient: 'Ashwagandha',
      dose: 500,
      url: 'https://www.thorne.com/products/dp/ashwagandha',
      goal: 'Stress'
    },
    {
      name: 'Bulk Supplements Creatine',
      ingredient: 'Creatine Monohydrate',
      dose: 5000,
      url: 'https://www.bulksupplements.com/products/creatine-monohydrate',
      goal: 'Strength'
    },
    {
      name: 'NOW Magnesium Glycinate',
      ingredient: 'Magnesium Glycinate',
      dose: 400,
      url: 'https://www.nowfoods.com/supplements/magnesium-glycinate',
      goal: 'Sleep'
    },
    {
      name: 'Double Wood Tongkat Ali',
      ingredient: 'Tongkat Ali',
      dose: 400,
      url: 'https://doublewoodsupplements.com/products/tongkat-ali',
      goal: 'Testosterone'
    }
  ];

  for (const ing of analysis.details) {
    if (ing.status !== '🟢 Clinically effective') {
      const alt = altProducts.find(p =>
        p.ingredient.toLowerCase() === ing.name.toLowerCase()
      );
      if (alt) {
        suggestions.push({
          for: ing.name,
          reason: ing.status,
          altName: alt.name,
          altDose: alt.dose,
          altUrl: alt.url,
          goal: alt.goal
        });
      }
    }
  }

  return suggestions;
}
