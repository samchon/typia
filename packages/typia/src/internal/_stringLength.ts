export const _stringLength = (value: string): number => {
  let count: number = 0;
  for (const _ch of value) ++count;
  return count;
};
