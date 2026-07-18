import { _randomHostnameLabels } from "./_randomFormatHostname";
import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";
import { _ILengthProps } from "./_randomStringLength";

export const _randomFormatIdnHostname = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${random(10)}.${random(3)}`;
  // `_isFormatIdnHostname` requires at least one label, a dot, and a >=2-char
  // TLD (`(…\.)+[a-z¡-￿]{2,}`), none of which the non-idn hostname generator
  // guarantees on its length path (it can emit a single dotless label). Reserve
  // a fixed `.<2-char TLD>` and realize the rest as dot-joined leading labels.
  const length: number = pickLength(props);
  return `${_randomHostnameLabels(length - 3)}.${random(2)}`;
};

const MAX_TOTAL = 253;
const MIN_TOTAL = 4; // the shortest idn hostname, `x.yy`: label(1) + `.` + tld(2)

const pickLength = (props: _ILengthProps): number => {
  let low: number = props.minLength === undefined ? MIN_TOTAL : props.minLength;
  if (low < MIN_TOTAL) low = MIN_TOTAL;
  const high: number =
    props.maxLength === undefined
      ? Math.min(MAX_TOTAL, low + 14)
      : Math.min(MAX_TOTAL, props.maxLength);
  if (high < low)
    throw new Error(
      "unable to generate a random idn hostname satisfying both the format and the length constraints.",
    );
  return _randomInteger({ type: "integer", minimum: low, maximum: high });
};

const random = (length: number) =>
  _randomString({ type: "string", minLength: length, maxLength: length });
