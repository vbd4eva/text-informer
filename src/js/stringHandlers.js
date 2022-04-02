const stringHandlers = {
  // Функця підрахунку унікальнит слів у тексті:
  uniqueWordsCounter(string) {
    // Дробить строку на масив слів
    const wordsArr = divideByWords(string);

    // Перебирає масив та Вертає об'єкт {слово : (кількість в тексті)}
    const wordsObj = wordsArr.reduce((acc, word) => {
      const newObj = { [word]: acc[word] ? acc[word] + 1 : 1 };
      acc = { ...acc, ...newObj };
      return acc;
    }, []);

    return wordsObj;

    // Дробить строку по словах, приймає строку, віддає масив слів
    function divideByWords(string) {
      //замінює на проділи всі симболи окрім Букв та цифр
      string = string.replace(/[^a-zа-я0-9ЁёЇїІіЄє]/gim, " ");
      // Лишає тільки по одному прбілу між словами
      string = string.replace(/\s+/g, " ").trim();
      return string.split(" ");
    }
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
