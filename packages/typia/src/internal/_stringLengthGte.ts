export const _stringLengthGte = (value: string, length: number): boolean => {
  let count: number = 0;
  if (length <= count) return true;
  for (const _ch of value) if (length <= ++count) return true;
  return false;
};
