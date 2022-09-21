type CheckerBoard = {
  [key: string]: string;
};
const board: CheckerBoard = {
  А: "1",
  И: "2",
  Т: "3",
  Е: "4",
  С: "5",
  Н: "6",
  О: "7",
  Б: "81",
  В: "82",
  Г: "83",
  Д: "84",
  Ж: "85",
  З: "86",
  К: "87",
  Л: "88",
  М: "89",
  П: "80",
  Р: "91",
  У: "92",
  Ф: "93",
  Х: "94",
  Ц: "95",
  Ч: "96",
  Ш: "97",
  Щ: "98",
  Ъ: "99",
  Ы: "90",
  Ь: "01",
  Э: "02",
  Ю: "03",
  Я: "04",
};
function toNumber(letter: string) {
  const existsInBoard = Object.keys(board).includes(letter);
  if (existsInBoard) {
    return board[letter];
  }
  return letter;
}
function fromNumber(number: string): any {
  const existsInBoard = Object.values(board).includes(number);
  if (existsInBoard) {
    return Object.keys(board).find((key) => board[key] === number);
  }
  return number;
}
function split(numbers: string): string[] {
  const boardValues = Object.values(board);
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers.slice(i, i + 2);
    if (boardValues.includes(number)) {
      result.push(number);
      i++;
    } else if (boardValues.includes(numbers[i])) {
      result.push(numbers[i]);
    }
  }
  return result;
}
export const toLetters = (numbers: string) => {
  return split(numbers).map(fromNumber).join("");
};
export const toNumbers = (letters: string) => {
  return letters.split("").map(toNumber).join("");
};
export default {
  toNumbers,
  toLetters,
};
