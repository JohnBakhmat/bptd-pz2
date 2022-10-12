/** TODO:
 * Зашифровать свои ФИО и день рождения номером в журнале
 */

import { encrypt, decrypt } from "../task1/encrypt";

const myFullName = "Бахмат Евгений Юрьевич";
const myBirthday = "девятое января две тысячи второго года";
const myNumberOfJournal = "ПЯТЬ";

const dataToEncrypt = myFullName + " " + myBirthday;

const encryptedData = encrypt(dataToEncrypt, myNumberOfJournal);
const decryptedData = decrypt(encryptedData, myNumberOfJournal);

const consolePrompt = `
  Задание 2: \n\n
  Исходные данные: ${dataToEncrypt}
  Ключ: ${myNumberOfJournal}
  Зашифрованные данные: ${encryptedData}
  Расшифрованные данные: ${decryptedData}
`;

console.log(consolePrompt);
