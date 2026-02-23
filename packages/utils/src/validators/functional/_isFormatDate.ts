export const _isFormatDate = (str: string): boolean => FORMAT.test(str);

const FORMAT = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
