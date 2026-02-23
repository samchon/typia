export const _isFormatIdnHostname = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^([a-z0-9\u00a1-\uffff0-9]+(-[a-z0-9\u00a1-\uffff0-9]+)*\.)+[a-z\u00a1-\uffff]{2,}$/i;
