export const _httpQueryReadNumber = (
  str: string | null,
): number | null | undefined =>
  !!str?.length ? (str === "null" ? null : (toNumber(str) as any)) : undefined;

const toNumber = (str: string): number | string => {
  const value: number = Number(str);
  return isNaN(value) ? str : value;
};
