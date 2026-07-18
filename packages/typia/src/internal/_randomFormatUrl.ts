import { _randomInteger } from "./_randomInteger";
import { _randomString } from "./_randomString";
import { _ILengthProps } from "./_randomStringLength";

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
    props.maxLength === undefined ? Math.max(low, base + 14) : props.maxLength;
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
