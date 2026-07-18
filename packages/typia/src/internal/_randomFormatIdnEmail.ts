import { _randomString } from "./_randomString";
import { _ILengthProps, _randomSegmentLength } from "./_randomStringLength";

export const _randomFormatIdnEmail = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${random(10)}@${random(10)}.${random(3)}`;
  // `_isFormatIdnEmail` requires a >=2-char TLD (`(…\.)+[^…]{2,}`), so the fixed
  // overhead is `@` + domain(1) + `.` + tld(2) = 5 and the local part absorbs the
  // requested length; a one-character TLD (the non-idn generator's length path)
  // would be rejected by the idn checker on every draw.
  return `${_randomSegmentLength(props, 5, 10, 1)}@${random(1)}.${random(2)}`;
};

const random = (length: number) =>
  _randomString({
    type: "string",
    minLength: length,
    maxLength: length,
  });
