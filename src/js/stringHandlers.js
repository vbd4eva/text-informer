const stringHandlers = {
  // Функця підрахунку унікальнит слів у тексті:
  uniqueWordsCounter(inputString) {
    // 1. підраховуватиме кількість унікальних слів у тексті.
    //     алгоритм:
    //       1. Бере перше слово тексту
    //       2. Записує {слово:1}
    //     3. діле split(слово)
    //     4. по длинне получившегося массива отределяет сколько таких слов было в тексте
    //     5. по довжині отримагного масиву визначає кількість таких слів у тексті
    //     6. до отримагного масиву застосовується join()
    //     7. повторює пункт #1
    return `Результат роботи функціі Підрахунку Унікальних слів`;
  },
};
// метод отримання функції за її ім'ям
export const getHandlerByName = (name) =>
  typeof stringHandlers[name] === "function" && stringHandlers[name];
// метод отримання переліку імен наявних функції
export const getAvailableHandlersNames = () =>
  Object.keys(stringHandlers).filter(
    (key) => !"getHandlerByNamegetAvailableHandlersNames".includes(key)
  );
