export const _httpQueryReadBigint = (
  str: string | null,
): bigint | null | undefined =>
  !!str?.length ? (str === "null" ? null : (toBigint(str) as any)) : undefined;

const toBigint = (str: string): bigint | string => {
  try {
    return BigInt(str);
  } catch {
    return str;
  }
};
