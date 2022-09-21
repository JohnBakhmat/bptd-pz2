import data from "./data.json";
import { decrypt } from "./encrypt";

const decodedDataset = data.map((item, index) => {
  return {
    ...item,
    id: index,
    decrypted: decrypt(item.text, item.key),
  };
});

console.log({
  decodedDataset,
});
