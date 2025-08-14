let supplementLog = [];

export function logSupplement(name, dose, unit) {
  const entry = {
    name,
    dose,
    unit,
    timestamp: new Date().toISOString()
  };
  supplementLog.unshift(entry);
  console.log('Supplement logged:', entry);
}

export function getSupplementLog() {
  return supplementLog;
}
