export const _isFormatDuration = (str: string): boolean => PATTERN.test(str);

const PATTERN =
  /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/;
