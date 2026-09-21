export const _stringLengthLte = (value: string, length: number): boolean => {
  let count: number = 0;
  if (!(count <= length)) return false;
  for (const _ch of value) if (!(++count <= length)) return false;
  return true;
};
