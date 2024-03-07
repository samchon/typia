import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ArrayAtomicSimple = _test_assertEquals(
  CustomGuardError,
)("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)((input) =>
  typia.assertEquals<ArrayAtomicSimple>(input, (p) => new CustomGuardError(p)),
);
