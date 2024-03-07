import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArraySimple = _test_assertGuard(
  CustomGuardError,
)("ArraySimple")<ArraySimple>(ArraySimple)(
  typia.createAssertGuard<ArraySimple>((p) => new CustomGuardError(p)),
);
