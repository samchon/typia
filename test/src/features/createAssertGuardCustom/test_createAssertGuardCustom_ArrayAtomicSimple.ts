import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArrayAtomicSimple = _test_assertGuard(
  CustomGuardError,
)("ArrayAtomicSimple")<ArrayAtomicSimple>(ArrayAtomicSimple)(
  typia.createAssertGuard<ArrayAtomicSimple>((p) => new CustomGuardError(p)),
);
