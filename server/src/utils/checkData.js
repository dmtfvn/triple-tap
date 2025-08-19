export default function checkData(file, dataId) {
  const idx = file.findIndex(d => d.id === dataId);
  if (idx === -1) {
    throw new Error('Data not found');
  }

  return idx;
}
