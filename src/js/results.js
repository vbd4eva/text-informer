// "Масив результатів"
const appResults = [];
// Функція додає поточний результат до 'Масиву результатів'. просить об'єкт поточного результату, повертає доповнений "Масив результатів"
function updateResults(result) {
  appResults.push(result);
  return appResults;
}

export default updateResults;
