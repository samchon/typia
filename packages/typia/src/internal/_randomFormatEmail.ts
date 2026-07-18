import { _randomString } from "./_randomString";
import { _ILengthProps, _randomSegmentLength } from "./_randomStringLength";

export const _randomFormatEmail = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${random(10)}@${random(10)}.${random(3)}`;
  // `<local>@<domain>.<tld>`: the local part absorbs the requested length while
  // a one-character domain and tld keep the fixed overhead (`@`, `.`) minimal.
  return `${_randomSegmentLength(props, 4, 10, 1)}@${random(1)}.${random(1)}`;
};

const random = (length: number) =>
  _randomString({
    type: "string",
    minLength: length,
    maxLength: length,
  });
