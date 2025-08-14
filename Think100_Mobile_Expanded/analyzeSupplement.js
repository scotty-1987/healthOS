import { clinicalReference } from './clinicalReference';

export function analyzeSupplement(ingredients) {
  const results = ingredients.map(ing => {
    const ref = clinicalReference.find(r =>
      r.ingredient.toLowerCase() === ing.name.toLowerCase()
    );

    if (!ref) {
      return {
        ...ing,
        match: false,
        status: '⚠️ Unknown ingredient',
        note: 'No clinical data found'
      };
    }

    const dose = parseFloat(ing.doseMg || 0);
    const unit = ref.unit === 'mg' ? 1 : 1000; // convert mg to match if needed
    const min = ref.minDose;
    const max = ref.maxDose;

    let status = '';
    if (dose < min) status = '🔴 Underdosed';
    else if (dose > max) status = '🟡 High dose';
    else status = '🟢 Clinically effective';

    return {
      ...ing,
      match: true,
      status,
      note: ref.note,
      evidence: ref.evidence
    };
  });

  const score = Math.round(
    (results.filter(r => r.status === '🟢 Clinically effective').length / results.length) * 100
  );

  return {
    score,
    summary: `⚕️ ${score}% Clinically Validated`,
    details: results
  };
}
