import { toLetters, toNumbers } from "./encode";
import { substractMatrix, sumMatrix } from "./matrixes";

const getKey = (text: string, key: string) => {
  const repeatCount = Math.ceil(text.length / key.length);
  return key.repeat(repeatCount).toUpperCase();
};

const prepare = (text: string, key: string) => {
  const preparedKey = getKey(text, key);
  const keyInNumbers = toNumbers(preparedKey);
  return { key: keyInNumbers };
};
const proceed = (text: string, keyInput: string, action: Action) => {
  let result = "";
  const { key } = prepare(text, keyInput);

  const textReverse = text.split("").reverse().join("");
  const keyReverse = key.split("").reverse().join("");
  const matrix = action === Action.ENCRYPT ? sumMatrix : substractMatrix;
  for (let i = 0; i < textReverse.length; i++) {
    const textReverseNumber = parseInt(textReverse[i]);
    const keyReverseNumber = parseInt(keyReverse[i]);
    result += matrix[textReverseNumber][keyReverseNumber];
  }
  return result.split("").reverse().join("");
};

enum Action {
  ENCRYPT,
  DECRYPT,
}

export const encrypt = (text: string, key: string) => {
  //Convert args to uppercase
  text = text.toUpperCase();
  //Remove spaces characters
  text = text.replace(/[Й]/g, "И");
  const result = text.split(" ").map((word) => {
    const isNumbers = !isNaN(parseInt(word));
    if (isNumbers) {
      return word;
    }
    const textInNumbers = toNumbers(word);
    return proceed(textInNumbers, key, Action.ENCRYPT);
  });

  return result.join(" ");
};
export const decrypt = (text: string, key: string) => {
  const textArray = text.split(" ");
  const result = textArray.map((word) => {
    return proceed(word, key, Action.DECRYPT);
  });

  return result.map(toLetters).join(" ");
};
