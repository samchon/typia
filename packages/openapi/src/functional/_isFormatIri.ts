export const _isFormatIri = (str: string): boolean => PATTERN.test(str);

const PATTERN = /^[A-Za-z][\d+-.A-Za-z]*:[^\u0000-\u0020"<>\\^`{|}]*$/u;
