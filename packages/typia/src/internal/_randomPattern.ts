import RandExp from "randexp";

import { _ILengthProps } from "./_randomStringLength";
import { _stringLength } from "./_stringLength";

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

  // The verification counts characters, not UTF-16 code units, because that is
  // what `MinLength` and `MaxLength` compare against. RandExp quantifies over
  // code units, so a pattern carrying an astral character emits draws whose two
  // counts differ -- `^\u{1f600}+$` under `MinLength<3>` reaches a two-character
  // string that is three code units long -- and measuring in code units here
  // would hand back a value the generated validator rejects.
  const bounded: boolean = min !== undefined || max !== undefined;
  const limit: number = bounded ? 1024 : 10;
  for (let i: number = 0; i < limit; ++i) {
    const str: string = r.gen();
    const length: number = bounded ? _stringLength(str) : 0;
    if (
      regex.test(str) &&
      (min === undefined || length >= min) &&
      (max === undefined || length <= max)
    )
      return str;
  }
  throw new Error(
    bounded
      ? "unable to generate a random string matching the pattern within the length range."
      : "unable to generate a random string matching the pattern.",
  );
};
