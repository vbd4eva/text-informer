import startAction from "./basicAction.js";
import { getAvailableHandlersNames } from "./stringHandlers.js";
import updateResults from "./results.js";
import getRandomHEXcolor from "./getRandomHEXcolor.js";

// отримання посилать на Елементи HTML
const refs = {
  form: document.querySelector("[data-action=start-action]"),
  actions: document.querySelector("[data-content=handlers-list]"),
  result: document.querySelector("[data-content=result-section]"),
};

// Отримує масив імен наявних для обробки тексту функцій
const handlerNamesArr = getAvailableHandlersNames();

const initInterfaceHTML = () => {
  // Рендерить Список Чекбоксів Для вибору функціі обробки тексту
  refs.actions.innerHTML = getHandlersNamesListMarkup(handlerNamesArr);
  // Рендерить Результат обробки тексту на сторінку HTML
  refs.result.innerHTML = getResultsMarkup();
  //Починає прослуховування  "submit" на формі ізаповнення вхідних данних зі сторінки
  refs.form.addEventListener("submit", submitFormHandler);
};

// Обробник Сабміту форми
function submitFormHandler(e) {
  e.preventDefault();

  // отримує данні введені на HTML сторінці
  const inputText = e.target.inputText.value;

  // Отримує ім'я функції яку необхідно застосувати до введеного тексту
  const hamdlerName = handlerNamesArr.map((name) => e.target[name])[0].name;

  // Запускає "Алгоритм обробки данних" , отримує об'єкт поточного результату
  const result = startAction({ inputText, hamdlerName });

  // Додає поточний результат до вже існуючих , отримує посилання на оновлений масив існуючих результатів
  const updatedResults = updateResults(result);

  // Рендерить існуючі результати на сторінку HTML
  refs.result.innerHTML = getResultsMarkup(updatedResults);
}

//
// Отримання HTML маркапу
//
// Функція отриманния маркап Списку Чекбоксів Для вибору функціі обробки тексту (просить масив імен - віддає HTML )
function getHandlersNamesListMarkup(handlerNamesArr) {
  return handlerNamesArr
    .map(
      (
        handlerName
      ) => `<li><input type="checkbox" checked id="${handlerName}" name="${handlerName}">
  <label for="${handlerName}">${handlerName}</label></li>`
    )
    .join();
}
// Функція пертворює Обєкт результатів обробки тексту у на сторінку HTML
function getResultsMarkup(results = []) {
  const markupDefault = `<p> Результатів Немає :( </p>`;
  if (!results.length) return markupDefault;

  return results.map((resObj) => {
    const { handlerName, result, string } = resObj;

    const uniqueWordsNumberMarkup = `<b>${Object.values(result).length}</b>`;
    const handlerNameMarkup = `<h3>Результат застовування "${handlerName}"</h3>`;
    const inputedStringMarkup = `<p>${string}</p>`;
    const singleResultMarkup = `<div class="result__block">${getSingleResultMarkup(
      result
    )}</div>`;

    return `<div class="result__item">
              ${handlerNameMarkup}
              <p>Знайдено ${uniqueWordsNumberMarkup} унікальних слів</p>
              <h4>Текст який оброблявся</h4><p>${inputedStringMarkup}</p>
              <h4>Перелік унікальних слів та їх кількість</h4>${singleResultMarkup}
            </div>`;
  });
}
// Повертає HTML markup , приймає об'єкт зі словами {слово:кількість}
function getSingleResultMarkup(result) {
  return Object.entries(result)
    .map(
      (wordInf, index) =>
        `<button
          type='button'
          data-index='${index}'
          data-weight='${wordInf[1]}'
          'data-color=${getRandomHEXcolor()}'
          >
            <i>${wordInf[0]}</i>
             <i>${wordInf[1]}</i>
        </button>`
    )
    .reverse()
    .join("");
}

export default initInterfaceHTML;
