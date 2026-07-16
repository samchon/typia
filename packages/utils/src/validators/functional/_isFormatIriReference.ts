export const _isFormatIriReference = (str: string): boolean => {
  if (FORBIDDEN.test(str) || INVALID_PERCENT.test(str)) return false;
  const colon: number = str.indexOf(":");
  const boundary: number = str.search(/[/?#]/u);
  return (
    colon === -1 || (boundary !== -1 && boundary < colon) || SCHEME.test(str)
  );
};

const FORBIDDEN = /[\u0000-\u0020\u007f-\u009f\ud800-\udfff"<>\\^`{|}]/u;
const INVALID_PERCENT = /%(?![0-9A-Fa-f]{2})/u;
const SCHEME = /^[A-Za-z][\d+-.A-Za-z]*:/u;
