import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate a hostname at a length the bounds allow.
 *
 * @evidence contracts/common.md#principled-implementation A hostname is dot-joined labels of one to 63 characters, at most 253 in total, so the requested total is realized by splitting it into full labels and a remainder, never making a label longer than 63; an impossible window throws.
 * @evidence contracts/common.md#clear-and-simple-design One function, with the label builder exported because the internationalized variant shares it.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The limits are those of the hostname grammar.
 * @evidence contracts/common.md#meaningful-documentation Inline comments and the label builder's doc explain the split.
 */
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
 * its length the same way since #2317 gave the two formats one structure. The
 * callers supply an integer total from1 through253.
 *
 * @evidence contracts/common.md#principled-implementation A target length is spent as full 63-character labels with joining dots and a final label, with the one awkward remainder of 64 split into two labels so no label exceeds 63.
 * @evidence contracts/common.md#clear-and-simple-design One function shared by the hostname and idn hostname generators.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The splitting rule is the grammar's.
 * @evidence contracts/common.md#meaningful-documentation The doc states the total length and the label limit.
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
