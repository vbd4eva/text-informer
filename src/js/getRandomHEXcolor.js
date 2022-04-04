// Повертає випадковий колір у HEX форматі
export default function getRandomHEXcolor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
