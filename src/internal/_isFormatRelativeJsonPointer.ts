export const _isFormatRelativeJsonPointer = (str: string): boolean =>
  PATTERN.test(str);

const PATTERN = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
