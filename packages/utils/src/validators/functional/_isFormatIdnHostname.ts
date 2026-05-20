export const _isFormatIdnHostname = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^(?=.{1,253}\.?$)[a-z0-9\u00a1-\uffff](?:[a-z0-9\u00a1-\uffff-]{0,61}[a-z0-9\u00a1-\uffff])?(?:\.[a-z0-9\u00a1-\uffff](?:[a-z0-9\u00a1-\uffff-]{0,61}[a-z0-9\u00a1-\uffff])?)*\.?$/iu;
