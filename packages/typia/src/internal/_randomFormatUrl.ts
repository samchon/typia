import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";
import { _ILengthProps } from "./_randomStringLength";

/**
 * Generate an `https` URL at a length the bounds allow.
 *
 * Samples lowercase ASCII domain labels and a path segment. Inclusive bounds
 * apply to the complete output; this builder's constrained shape starts at 12
 * characters and throws when the window is shorter.
 *
 * @evidence contracts/common.md#principled-implementation An unconstrained draw is `https://` with a host of random letters and a short top-level label; a constrained one keeps the shortest host and lets a path segment absorb extra length, since a path is unbounded, throwing when the window is below the shortest form.
 * @evidence contracts/common.md#clear-and-simple-design One function and a private length picker.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The shape is the generator's and its limits are reported.
 * @evidence contracts/common.md#meaningful-documentation Native prose identifies the sampled alphabet, whole-output inclusive bounds and 12-character shape floor/failure; the inline comment explains growth through the path.
 */
export const _randomFormatUrl = (props?: _ILengthProps): string => {
  if (props?.minLength === undefined && props?.maxLength === undefined)
    return `https://${random(10)}.${random(3)}`;
  // `https://a.bc` is the shortest host this builder emits (12 chars); any extra
  // length rides in the path segment, which the URL grammar leaves unbounded.
  const base: string = `https://${random(1)}.${random(2)}`;
  const target: number = pickLength(props, base.length);
  return target <= base.length
    ? base
    : `${base}/${random(target - base.length - 1)}`;
};

const pickLength = (props: _ILengthProps, base: number): number => {
  let low: number = props.minLength === undefined ? base : props.minLength;
  if (low < base) low = base;
  const high: number =
    props.maxLength === undefined ? low + 14 : props.maxLength;
  if (high < low)
    throw new Error(
      "unable to generate a random URL satisfying both the format and the length constraints.",
    );
  return _randomInteger({ type: "integer", minimum: low, maximum: high });
};

const random = (length: number) =>
  _randomString({
    type: "string",
    minLength: length,
    maxLength: length,
  });
