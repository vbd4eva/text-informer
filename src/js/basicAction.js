import { getHandlerByName } from "./stringHandlers.js";

// - функція запуску алгоритму і отримання ("вхідної строки", "переліку Імен функціі обробки строк")
// (із "HTML інтерфейсу")
const startAction = ({ inputText, hamdlerName }) => {
  //отримання функціъ по її імені
  const stringHandler = getStringHandler(hamdlerName);
  //валідація вхідної строки
  const string = validateInputString(inputText);

  if (stringHandler && string)
    // Функція виконання дії із "вхідною строкою", "функцією обробки строк"
    return executeAction({ string, stringHandler });
};

//валідація вхідної строки (validateInputString)
// 2.2- отримує строку або FALSE якщо строка пуста
const validateInputString = (string) => (string.length > 0 ? string : false);

// отримання функції по її імені
// 2.1- отримує функцію за її їм'ям або FALSE
const getStringHandler = (hamdlerName) => getHandlerByName(hamdlerName);

// Приймає "вхідну строку" та "функцію обробки строки"
// Застосовує на "вхідну строку" "функцію обробки строки", повертає обїєкт "поточного результату"
// return {
//   string, - "вхідна строка"
//   handlerName, - "назва функції переданої"
//   result, - результат роботи "переданої функції"
// };
const executeAction = ({ string, stringHandler }) => {
  const handlerName = stringHandler.name;
  const result = stringHandler(string);

  return {
    string,
    handlerName,
    result,
  };
};

export default startAction;
