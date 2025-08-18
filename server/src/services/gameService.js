import { readFromFile, writeToFile } from '../fs/fsManager.js';
import { v4 as uuidv4 } from 'uuid';

import setPower from '../utils/setPower.js';
import checkData from '../utils/checkData.js';

async function post(data) {
  const file = await readFromFile();

  const exist = file.some(u => u.username === data.username);
  if (exist) {
    throw new Error(`${data.username} is taken`);
  }

  const newData = {
    id: uuidv4(),
    ...data,
    score: Number(data.score),
    power: setPower(data)
  };

  file.push(newData);

  await writeToFile(file);

  return file;
}

async function put(dataId, data) {
  const file = await readFromFile();

  const idx = checkData(file, dataId);

  const curData = file[idx];

  file[idx] = {
    ...curData,
    ...data
  };

  await writeToFile(file);

  return file;
}

async function del(dataId) {
  const file = await readFromFile();

  checkData(file, dataId);

  const newFile = file.filter(d => d.id !== dataId);

  await writeToFile(newFile);

  return newFile;
}

export default {
  post,
  put,
  del
};
