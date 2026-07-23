import { _randomHostnameLabels } from "./_randomFormatHostname";
import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";
import { _ILengthProps } from "./_randomStringLength";

export const _randomFormatIdnHostname = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${random(10)}.${random(3)}`;
  // idn-hostname shares hostname's structure (a single label of 1..63 chars is
  // valid, no dot or trailing label required), so the requested length is
  // realized the same way: split it across dot-joined labels. #2317 dropped the
  // mandatory dot and two-character trailing label this generator used to
  // reserve, which is why it now realizes a length below four.
  return _randomHostnameLabels(pickLength(props));
};

const MAX_TOTAL = 253;

const pickLength = (props: _ILengthProps): number => {
  let low: number = props.minLength === undefined ? 1 : props.minLength;
  if (low < 1) low = 1;
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
