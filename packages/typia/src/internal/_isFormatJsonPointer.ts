export const _isFormatJsonPointer = (str: string): boolean => PATTERN.test(str);

const PATTERN = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
