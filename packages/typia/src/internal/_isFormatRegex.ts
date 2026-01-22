export const _isFormatRegex = (str: string): boolean => {
  try {
    new RegExp(str);
    return true;
  } catch {
    return false;
  }
};
