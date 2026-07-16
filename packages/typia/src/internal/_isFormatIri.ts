import { _isFormatIriReference } from "./_isFormatIriReference";

export const _isFormatIri = (str: string): boolean =>
  SCHEME.test(str) && _isFormatIriReference(str);

const SCHEME = /^[A-Za-z][\d+-.A-Za-z]*:/u;
