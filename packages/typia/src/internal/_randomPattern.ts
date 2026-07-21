import RandExp from "randexp";

import { _ILengthProps } from "./_randomStringLength";

export const _randomPattern = (
  regex: RegExp,
  props?: _ILengthProps,
): string => {
  const r: RandExp = new RandExp(regex);
  const min: number | undefined = props?.minLength;
  const max: number | undefined = props?.maxLength;

  // RandExp expands an unbounded quantifier to `randInt(token.min, token.min +
  // r.max)`, so steering `r.max` biases the generated length toward the window.
  // There is no matching floor control, so the length is still verified below.
  if (max !== undefined) r.max = max;
  else if (min !== undefined && min * 2 > r.max) r.max = min * 2;

  const bounded: boolean = min !== undefined || max !== undefined;
  const limit: number = bounded ? 1024 : 10;
  for (let i: number = 0; i < limit; ++i) {
    const str: string = r.gen();
    if (
      regex.test(str) &&
      (min === undefined || str.length >= min) &&
      (max === undefined || str.length <= max)
    )
      return str;
  }
  throw new Error(
    bounded
      ? "unable to generate a random string matching the pattern within the length range."
      : "unable to generate a random string matching the pattern.",
  );
};
