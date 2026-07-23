import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";
import { _ILengthProps } from "./_randomStringLength";

export const _randomFormatHostname = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `${random(10)}.${random(3)}`;
  // A hostname is dot-joined labels of 1..63 chars whose total is capped at 253,
  // so the requested length is realized by splitting it across enough labels.
  return _randomHostnameLabels(pickLength(props));
};

const MAX_TOTAL = 253;
const MAX_LABEL = 63;

const pickLength = (props: _ILengthProps): number => {
  let low: number = props.minLength === undefined ? 1 : props.minLength;
  if (low < 1) low = 1;
  const high: number =
    props.maxLength === undefined
      ? Math.min(MAX_TOTAL, low + 14)
      : Math.min(MAX_TOTAL, props.maxLength);
  if (high < low)
    throw new Error(
      "unable to generate a random hostname satisfying both the format and the length constraints.",
    );
  return _randomInteger({ type: "integer", minimum: low, maximum: high });
};

/**
 * Builds dot-joined hostname labels totaling exactly `length` characters, each
 * label within 63 chars. Shared with the idn-hostname generator, which realizes
 * its length the same way since #2317 gave the two formats one structure.
 */
export const _randomHostnameLabels = (length: number): string => {
  const parts: string[] = [];
  let remaining: number = length;
  while (remaining > MAX_LABEL + 1) {
    // one full label plus its joining dot
    parts.push(random(MAX_LABEL));
    remaining -= MAX_LABEL + 1;
  }
  if (remaining <= MAX_LABEL) parts.push(random(remaining));
  else {
    // remaining === MAX_LABEL + 1: two labels keep every label within 63 chars
    parts.push(random(MAX_LABEL - 1));
    parts.push(random(1));
  }
  return parts.join(".");
};

const random = (length: number) =>
  _randomString({ type: "string", minLength: length, maxLength: length });
