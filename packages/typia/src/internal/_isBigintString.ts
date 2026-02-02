export const _isBigintString = (str: string): boolean => {
  try {
    BigInt(str);
    return true;
  } catch {
    return false;
  }
};
