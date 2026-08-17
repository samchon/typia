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
  // what `MinLength` and `MaxLength` compare against. `Pattern` compiles to a
  // flagless `RegExp`, so a quantifier binds one code unit wherever its atom is
  // a bare astral character: under `^😀+$` the `+` repeats the trailing low
  // surrogate alone, and RandExp draws `\ud83d` + k * `\ude00` -- k characters
  // in k + 1 code units. Measuring in code units accepted a two-character draw
  // for `MinLength<3>` and handed back a value the generated validator rejects.
  // Group the atom (`^(?:😀)+$`) and the arithmetic changes to 2k units for k
  // characters; the two counts still differ, which is the point.
  //
  // The count is taken only after the pattern matches, and only when a bound
  // exists, so an unbounded draw still walks nothing.
  const bounded: boolean = min !== undefined || max !== undefined;
  const limit: number = bounded ? 1024 : 10;
  for (let i: number = 0; i < limit; ++i) {
    const str: string = r.gen();
    if (regex.test(str) === false) continue;
    if (bounded === false) return str;
    const length: number = _stringLength(str);
    if (
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
