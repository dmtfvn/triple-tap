import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'db.json');

export function readFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }

      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (err) {
        reject(err.message);
      }
    });
  });
}

export function writeToFile(data) {
  return new Promise((resolve, reject) => {
    const newData = JSON.stringify(data, null, 2);

    fs.writeFile(filePath, newData, 'utf8', (err) => {
      if (err) {
        return reject(err);
      }

      resolve();
    });
  });
}
