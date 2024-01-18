import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_misc_isClone_ArrayAny = _test_misc_isClone(
  "ArrayAny",
)<ArrayAny>(ArrayAny)((input) =>
  ((input: any): typia.Resolved<ArrayAny> | null => {
    const is = (input: any): input is ArrayAny => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.anys) &&
        (undefined === input.undefindable1 ||
          Array.isArray(input.undefindable1)) &&
        (undefined === input.undefindable2 ||
          Array.isArray(input.undefindable2)) &&
        (null === input.nullables1 || Array.isArray(input.nullables1)) &&
        (null === input.nullables2 || Array.isArray(input.nullables2)) &&
        (null === input.both1 ||
          undefined === input.both1 ||
          Array.isArray(input.both1)) &&
        (null === input.both2 ||
          undefined === input.both2 ||
          Array.isArray(input.both2)) &&
        (null === input.both3 ||
          undefined === input.both3 ||
          Array.isArray(input.both3)) &&
        Array.isArray(input.union);
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (input: ArrayAny): typia.Resolved<ArrayAny> => {
      const $clone = require("typia/lib/functional/$clone").$clone;
      const $co0 = (input: any): any => ({
        anys: $clone(input.anys),
        undefindable1: $clone(input.undefindable1),
        undefindable2: $clone(input.undefindable2),
        nullables1: $clone(input.nullables1),
        nullables2: $clone(input.nullables2),
        both1: $clone(input.both1),
        both2: $clone(input.both2),
        both3: $clone(input.both3),
        union: $clone(input.union),
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
