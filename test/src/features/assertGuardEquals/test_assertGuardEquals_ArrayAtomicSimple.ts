import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_assertGuardEquals_ArrayAtomicSimple = _test_assertGuardEquals(
  TypeGuardError,
)("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
  typia.assertGuardEquals<ArrayAtomicSimple>(input),
);
