let scanHistory = [];

export function logScan(barcode, product) {
  const entry = {
    barcode,
    name: product.name,
    score: product.score,
    flagged: Array.isArray(product.ingredients)
      ? product.ingredients.filter(i => i.flag).length
      : 0,
    timestamp: new Date().toISOString()
  };
  scanHistory.unshift(entry);
  console.log('Scan logged:', entry);
}

export function getScanHistory() {
  return scanHistory;
}
