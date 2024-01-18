import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_misc_createClone_ArrayAny = _test_misc_clone(
  "ArrayAny",
)<ArrayAny>(ArrayAny)((input: ArrayAny): typia.Resolved<ArrayAny> => {
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
});
