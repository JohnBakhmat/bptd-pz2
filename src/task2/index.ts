/** TODO:
 * Зашифровать свои ФИО и день рождения номером в журнале
 */

import { encrypt, decrypt } from "../task1/encrypt";
import chalk from "chalk";

const chalks = {
  title: chalk.bold.bgRed,
  input: chalk.hex("#F8631D"),
  key: chalk.green,
  encrypted: chalk.blue,
  decrypted: chalk.hex("#F8631D"),
};

const myFullName = "Бахмат Евгений Юрьевич";
const myBirthday = "девятое января две тысячи второго года";
const myNumberOfJournal = "5";

const dataToEncrypt = myFullName + " " + myBirthday;

const encryptedData = encrypt(dataToEncrypt, myNumberOfJournal);
const decryptedData = decrypt(encryptedData, myNumberOfJournal);

const consolePrompt = `
  ${chalks.title("Задание 2:")}
  Исходные данные:      \t${chalks.input(`${dataToEncrypt}`)} 
  Ключ:                 \t${chalks.key(`${myNumberOfJournal}`)} 
  Зашифрованные данные: \t${chalks.encrypted(`${encryptedData}`)} 
  Расшифрованные данные:\t${chalks.decrypted(`${decryptedData}`)} 
`;

console.log(consolePrompt);
