export const _isFormatByte = (str: string): boolean => {
  PATTERN.lastIndex = 0;
  return PATTERN.test(str);
};

const PATTERN =
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
