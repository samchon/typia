import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { TypeGuardError } from "typia";

export const test_assertEquals_ArrayAtomicSimple = _test_assertEquals(
  TypeGuardError,
)("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
  typia.assertEquals<ArrayAtomicSimple>(input),
);
