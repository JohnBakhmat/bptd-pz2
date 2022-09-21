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
  return proceed(text, key, Action.ENCRYPT);
};
export const decrypt = (text: string, key: string) => {
  const decrypted = proceed(text, key, Action.DECRYPT);
  return toLetters(decrypted);
};
