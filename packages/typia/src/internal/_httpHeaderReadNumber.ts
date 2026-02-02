export const _httpHeaderReadNumber = (value: string | undefined) =>
  value !== undefined ? toNumber(value) : undefined;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
