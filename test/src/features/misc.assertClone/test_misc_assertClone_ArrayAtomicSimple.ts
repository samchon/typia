import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ArrayAtomicSimple = _test_misc_assertClone(
  TypeGuardError,
)("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
  typia.misc.assertClone<ArrayAtomicSimple>(input),
);
