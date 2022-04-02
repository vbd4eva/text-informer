import startAction from "./js/basicAction.js";
import { getAvailableHandlersNames } from "./js/stringHandlers.js";

// - вибрати отримання посилать на Елементи HTML
// Вібірка HTML єлементів
const Refs = {
  form: document.querySelector("[data-action=start-action]"),
  actions: document.querySelector("[data-content=handlers-list]"),
  result: document.querySelector("[data-content=result-section]"),
};

// - рендер маркапу списку функцій "[data-content=handlersList]"
const getHandlersListHTML = (
  handlerName
) => `<li><input type="checkbox" checked id="${handlerName}" name="${handlerName}">
  <label for="${handlerName}">${handlerName}</label></li>`;

const handlerNamesList = getAvailableHandlersNames();
Refs.actions.innerHTML = handlerNamesList.map(getHandlersListHTML).join();

Refs.form.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();
  const inputText = e.target.inputText.value;
  const hamdlerName = handlerNamesList.map((name) => e.target[name])[0].name;
  const result = startAction({ inputText, hamdlerName });
  console.dir(result);
}
